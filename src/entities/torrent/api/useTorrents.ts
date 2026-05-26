import { connectToTransmission, type RpcResponse } from '@/shared/http/HttpRequest/HttpRequest';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { Torrent } from '../model/type';
import { TorrentFields } from '@/shared/const/const';

interface TorrentsResponse {
  torrents: Torrent[];
  removed?: number[]
}

export function useTorrents() {
  const queryClient = useQueryClient();

  const {data, isLoading, isError, error} = useQuery<RpcResponse<TorrentsResponse>>({
    queryKey: ['torrents'],
    queryFn: () => connectToTransmission('torrent-get', { fields: TorrentFields }),
    refetchInterval: 8000,
    refetchOnWindowFocus: false,
    retry: false,
  })
  
  useQuery({
    queryKey: ['torrents-active'],
    queryFn: async() => {
      const result = await connectToTransmission<TorrentsResponse>('torrent-get', {
        ids: 'recently-active',
        fields: TorrentFields
      })

      const updated = result?.arguments.torrents;
      const removed = result?.arguments.removed ?? [];

      queryClient.setQueryData<RpcResponse<TorrentsResponse>>(['torrents'], (prev) => {
        if(!prev) return prev;

        return {
          ...prev,
          arguments: {
            ...prev.arguments,
            torrents: prev.arguments.torrents.filter(t => !removed.includes(t.id)).map(t => updated.find(u => u.id === t.id) ?? t)
          }
        }
      })   
      
      return result
    },
    enabled: !!data,
    refetchInterval: 5000,
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {torrents: data?.arguments.torrents ?? [], isLoading, isError, error}
}
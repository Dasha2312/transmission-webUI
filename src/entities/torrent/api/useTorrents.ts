import { connectToTransmission } from '@/shared/http/HttpRequest/HttpRequest';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { Torrent } from '../model/type';
import { TorrentFields } from '@/shared/const/const';
import { useSession } from '@/entities/session/api/useSession';

interface TorrentsResponse {
  torrents: Torrent[];
  removed?: number[]
}

export function useTorrents() {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  console.log('session', session)

  const {data, isLoading, isError, error} = useQuery<TorrentsResponse>({
    queryKey: ['torrents'],
    queryFn: () => connectToTransmission('torrent_get', { fields: TorrentFields }),
    enabled: !!session,
    refetchInterval: 8000,
    refetchOnWindowFocus: false,
    retry: false,
  })
  
  useQuery({
    queryKey: ['torrents-active'],
    queryFn: async() => {
      const result = await connectToTransmission<TorrentsResponse>('torrent_get', {
        ids: 'recently_active',
        fields: TorrentFields,
      })

      const updated = result?.torrents;
      const removed = result?.removed ?? [];

      queryClient.setQueryData<TorrentsResponse>(['torrents'], (prev) => {
        if(!prev) return prev;

        return {
          ...prev,
          arguments: {
            ...prev,
            torrents: prev.torrents.filter(t => !removed.includes(t.id)).map(t => updated.find(u => u.id === t.id) ?? t)
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

  console.log('torrents', data)
  return {torrents: data?.torrents ?? [], isLoading, isError, error}
}
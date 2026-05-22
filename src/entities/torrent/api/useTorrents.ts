import { connectToTransmission, type RpcResponse } from '@/shared/http/HttpRequest/HttpRequest';
import { useQuery } from '@tanstack/react-query';
import type { Torrent } from '../model/type';
import { TorrentFields } from '@/shared/const/const';

interface TorrentsResponse {
  torrents: Torrent[];
}

export function useTorrents() {
  const {data, isLoading, isError, error} = useQuery<RpcResponse<TorrentsResponse>, Error>({
    queryKey: ['torrents'],
    queryFn: () => connectToTransmission('torrent-get', { fields: TorrentFields }),
    refetchInterval: 8000,
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {torrents: data?.arguments.torrents ?? [], isLoading, isError, error}
}
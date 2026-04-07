import { connectToTransmission } from '@/shared/http/HttpRequest/HttpRequest';
import { useQuery } from '@tanstack/react-query';

interface Torrent {
  id: number;
  name: string;
  status: number;
  percentDone: number;
}

let instance: Awaited<ReturnType<typeof connectToTransmission>> | null = null;

async function getInstance() {
  if (!instance) {
    instance = await connectToTransmission();
  }
  return instance;
}

export function useTransmissionQuery() {
  const {data, isLoading, isError, error} = useQuery<Torrent[], Error>({
    queryKey: ['torrents'],
    queryFn: async () => {
      const t = getInstance();
      const response = (await t).getTorrents();

      return (await response).arguments.torrents
    },
    refetchInterval: 8000,
    refetchOnWindowFocus: false,
    retry: false,
  })

  return {torrents: data ?? [], loading: isLoading, isError, error}
}
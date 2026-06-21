import { connectToTransmission, type RpcResponse } from "@/shared/http/HttpRequest/HttpRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface TorrentDeleteResponse {
  arguments: any,
  result: string
}

export function useTorrentDelete() {
  const queryClient = useQueryClient();

  const {mutate: torrentDelete, isPending, isError, error} = useMutation<RpcResponse<TorrentDeleteResponse>, Error, { id: number; deleteFiles: boolean }>({
    mutationFn: ({ id, deleteFiles }: { id: number; deleteFiles: boolean }) => connectToTransmission('torrent-remove', { ids: [id], 'delete-local-data': deleteFiles }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['torrents'] })
  })

  return {torrentDelete, isPending, isError, error}
}
import { connectToTransmission, type RpcResponse } from "@/shared/http/HttpRequest/HttpRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface TorrentAddResponse { 
  arguments: any,
  result: string
}

function useTorrentAdd() {
  const queryClient = useQueryClient();

  const {mutate: addTorrent, isPending, isError, error} = useMutation<RpcResponse<TorrentAddResponse>, Error, { downloadDir: string; paused: boolean; metainfo: string | null; filename: string | null }>({
    mutationFn: ({downloadDir, paused, metainfo, filename}) => connectToTransmission('torrent-add', { 'download-dir': downloadDir, paused: paused, filename, metainfo }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['torrents'] })
  })

  return {addTorrent, isPending, isError, error}
}

export default useTorrentAdd;
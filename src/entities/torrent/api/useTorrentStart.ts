import { connectToTransmission } from "@/shared/http/HttpRequest/HttpRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useTorrentStart() {
  const queryClient = useQueryClient();

  const {mutate: startTorrent, isPending: isPendingStart} = useMutation({
    mutationFn: (id: number) => connectToTransmission('torrent-start', { ids: [id] }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['torrents'] })
  })

  return {startTorrent, isPendingStart}
}

export default useTorrentStart;
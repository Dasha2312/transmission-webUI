import { connectToTransmission } from "@/shared/http/HttpRequest/HttpRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useTorrentsStop() {
  const queryClient = useQueryClient();

  const {mutate: stopTorrent, isPending: isPendingStop} = useMutation({
    mutationFn: (id: number) => connectToTransmission('torrent-stop', { ids: [id] }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['torrents'] })
  })

  return {stopTorrent, isPendingStop}
}

export default useTorrentsStop;
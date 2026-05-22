import { connectToTransmission } from "@/shared/http/HttpRequest/HttpRequest";
import { useQuery } from "@tanstack/react-query";
import type { SessionStatsDTO } from "./type/type";

function useSessionStats() {
  const {data, isLoading, isError, error} = useQuery<SessionStatsDTO>({
    queryKey: ['session-stats'],
    queryFn: () => connectToTransmission('session-stats'),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  return {data, isLoading, isError, error}
}

export default useSessionStats;
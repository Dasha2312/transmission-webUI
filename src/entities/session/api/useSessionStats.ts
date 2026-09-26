import { connectToTransmission } from "@/shared/http/HttpRequest/HttpRequest";
import { useQuery } from "@tanstack/react-query";
import type { SessionStatsDTO } from "./type/type";

function useSessionStats() {
  const {data, isLoading, isError, error} = useQuery<SessionStatsDTO>({
    queryKey: ['session-stats'],
    queryFn: () => connectToTransmission('session_stats'),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  console.log('asd', data)

  return {data, isLoading, isError, error}
}

export default useSessionStats;
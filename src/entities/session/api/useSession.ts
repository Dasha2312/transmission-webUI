import { connectToTransmission } from "@/shared/http/HttpRequest/HttpRequest";
import { useQuery } from "@tanstack/react-query";
import type { SessionStatsDTO } from "./type/type";

export function useSession() {
  const {data, isLoading, isError, error} = useQuery<SessionStatsDTO>({
    queryKey: ['session'],
    queryFn: () => connectToTransmission('session-get'),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  return {data, isLoading, isError, error};
}
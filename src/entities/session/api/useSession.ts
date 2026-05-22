import { connectToTransmission } from "@/shared/http/HttpRequest/HttpRequest";
import { useQuery } from "@tanstack/react-query";

export function useSession() {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['session'],
    queryFn: () => connectToTransmission('session-get'),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  return {data, isLoading, isError, error};
}
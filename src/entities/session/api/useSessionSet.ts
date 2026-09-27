import { connectToTransmission } from "@/shared/http/HttpRequest/HttpRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useSessionSet<T extends Record<string, any>>() {
  const queryClient = useQueryClient();

  const {mutateAsync: sessionMutate, isPending, isError, error} = useMutation({
    mutationFn: (params: T) => connectToTransmission('session_set', params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['session'] })
    }
  })

  return {sessionMutate,  isPending, isError, error}
}

export default useSessionSet;
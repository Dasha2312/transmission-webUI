import { connectToTransmission } from "@/shared/http/HttpRequest/HttpRequest";
import { useQuery } from "@tanstack/react-query";
import type { FolderInfoDTO } from "../type/type";

function useFolderInfo({dirPath}) {
  const { data: folderInfo, isLoading: folderInfoIsLoading, isError, error} = useQuery<FolderInfoDTO>({
    queryKey: ['freeSpace'],
    queryFn: () => connectToTransmission('free_space', { path: dirPath}),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  console.log('folderInfo', folderInfo)

  return { folderInfo, folderInfoIsLoading, isError,error }
}

export default useFolderInfo;
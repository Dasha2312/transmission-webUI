export interface FolderInfoDTO {
  arguments: FolderInfoArguments;
  result: string
}

export interface FolderInfoArguments {
  path: string;
  'size-bytes': number;
  'total_size': number
}
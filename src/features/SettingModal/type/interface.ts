export interface DownloadSettings {
  download_dir?: string;
  incomplete_dir_enabled: boolean;
  incomplete_dir?: string;
  start_added_torrents: boolean;
  rename_partial_files: boolean;
  download_queue_enabled: boolean;
  download_queue_size: number;
}
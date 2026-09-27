export interface SessionStatsDTO {
  active_torrent_count: number,
  cumulative_stats: SessionStatsInfo,
  current_stats: SessionStatsInfo,
  download_speed: number,
  paused_torrent_count: number,
  torrent_count: number,
  upload_speed: number,
  download_dir: string;
  dht_enabled: string;
  download_dir_free_space: number;
  incomplete_dir_enabled: boolean;
  download_queue_enabled: boolean;
  download_queue_size: number;
  rename_partial_files: boolean;
  start_added_torrents: boolean;
}

export interface SessionStatsInfo {
  downloaded_bytes: number,
  files_added: number,
  seconds_active: number,
  session_count: number,
  uploaded_bytes: number
}
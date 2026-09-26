import type { Torrent } from "../types/interface";

export const enumConst = {
  BASE_URL: '/transmission/rpc'
} as const

export const enumTorentStatus = {
  0: 'Torrent is stopped',
  1: 'Torrent is queued to verify local data',
  2: 'Torrent is verifying local data',
  3: 'Torrent is queued to download',
  4: 'Torrent is downloading',
  5: 'Torrent is queued to seed',
  6: 'Torrent is seeding'
} as const

export const TorrentFields: (keyof Torrent)[] = [
  "id",
  "added_date",
  "error",
  "name",
  "file_count",
  "error_string",
  "eta",
  "is_finished",
  "is_stalled",
  "left_until_done",
  "metadata_percent_complete",
  "labels",
  "peers",
  "peers_connected",
  "peers_getting_from_us",
  "peers_sending_to_us",
  "percent_done",
  "queue_position",
  "rate_download",
  "rate_upload",
  "recheck_progress",
  "seed_ratio_mode",
  "seed_ratio_limit",
  "size_when_done",
  "status",
  "total_size",
  "trackers",
  "download_dir",
  "uploaded_ever",
  "upload_ratio",
  "total_size",
  "tracker_stats",
  "percent_complete",
  "webseeds_sending_to_us"
]

export type TorrentFieldsTypes = typeof TorrentFields[number];
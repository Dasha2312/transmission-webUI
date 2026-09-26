import type { SpeedOptions, Torrent } from "../types/interface";

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

export const SPEED_LIMIT_OPTIONS: SpeedOptions[] = [
  { label: 'Unlimited', value: 0, enabled: false },
  { label: '50 kB/s',   value: 50 },
  { label: '100 kB/s',  value: 100 },
  { label: '200 kB/s',  value: 200 },
  { label: '500 kB/s',  value: 500 },
  { label: '1 MB/s',    value: 1000 },
  { label: '2 MB/s',    value: 2000 },
  { label: '5 MB/s',    value: 5000 },
  { label: '10 MB/s',   value: 10000 },
  { label: '20 MB/s',   value: 20000 },
  { label: '50 MB/s',   value: 50000 },
] as const;
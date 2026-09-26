import type { SelectOption } from "../UI/Select/type/interface";

export interface Torrent {
  added_date: string;
  download_dir: string,
  error: number,
  error_string: string,
  eta: number,
  id: number,
  is_finished: boolean,
  is_stalled: boolean,
  labels: string[],
  left_until_done: number,
  metadata_percent_complete: number,
  name: string,
  peers_connected: number,
  peers_getting_from_us: number,
  peers_sending_to_us: number,
  percent_done: number,
  queue_position: number,
  rate_download: number,
  rate_upload: number,
  recheck_progress: number,
  seed_ratio_limit: number,
  seed_ratio_mode: number,
  size_when_done: number,
  status: number,
  trackers: Tracker[],
  tracker_stats: TrackerStat[];
  upload_ratio: number,
  uploaded_ever: number,
  webseeds_sending_to_us: number;
  file_count: string;
  total_size: string;
  peers: string;
  percent_complete: string;
}

export interface Tracker { 
  announce: string,
  id: number,
  scrape: string,
  sitename: string,
  tier: number;
  seederCount: number;
}

export interface TrackerStat {
  announce: string,
  announceState: number,
  downloadCount: number,
  hasAnnounced: boolean,
  hasScraped: boolean,
  host:string,
  id: number,
  isBackup: boolean,
  lastAnnouncePeerCount: number,
  lastAnnounceResult: string,
  lastAnnounceStartTime: number,
  lastAnnounceSucceeded: boolean,
  lastAnnounceTime: number,
  lastAnnounceTimedOut: boolean,
  lastScrapeResult: string,
  lastScrapeStartTime: number,
  lastScrapeSucceeded: boolean,
  lastScrapeTime: number,
  lastScrapeTimedOut: boolean,
  leecherCount: number,
  nextAnnounceTime: number,
  nextScrapeTime: number,
  scrape: string,
  scrapeState: number,
  seederCount: number,
  sitename: string,
  tier: number
}

export interface SpeedOptions extends SelectOption<number>  {
  enabled?: boolean;
}

export const ModalType = {
  ADD_TORRENT: "add-torrent",
  DELETE_TORRENT: "delete-torrent",
  DETAILS_TORRENT: 'details-torrent',
  SETTING: 'setting'
} as const;
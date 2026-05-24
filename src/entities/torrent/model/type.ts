export interface Torrent {
  downloadDir: string,
  error: number,
  errorString: string,
  eta: number,
  id: number,
  isFinished: boolean,
  isStalled: boolean,
  labels: string[],
  leftUntilDone: number,
  metadataPercentComplete: number,
  name: string,
  peersConnected: number,
  peersGettingFromUs: number,
  peersSendingToUs: number,
  percentDone: number,
  queuePosition: number,
  rateDownload: number,
  rateUpload: number,
  recheckProgress: number,
  seedRatioLimit: number,
  seedRatioMode: number,
  sizeWhenDone: number,
  status: number,
  trackers: Tracker[],
  trackerStats: TrackerStat[];
  uploadRatio: number,
  uploadedEver: number,
  webseedsSendingToUs: number
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
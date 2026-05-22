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
  uploadRatio: number,
  uploadedEver: number,
  webseedsSendingToUs: number
}

export interface Tracker { 
  announce: string,
  id: number,
  scrape: string,
  sitename: string,
  tier: number
}
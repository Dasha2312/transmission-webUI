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

export const TorrentFields = [
  "id",
  "error",
  "name",
  "errorString",
  "eta",
  "isFinished",
  "isStalled",
  "labels",
  "leftUntilDone",
  "metadataPercentComplete",
  "peersConnected",
  "peersGettingFromUs",
  "peersSendingToUs",
  "percentDone",
  "queuePosition",
  "rateDownload",
  "rateUpload",
  "recheckProgress",
  "seedRatioMode",
  "seedRatioLimit",
  "sizeWhenDone",
  "status",
  "trackers",
  "downloadDir",
  "uploadedEver",
  "uploadRatio",
  "total_size",
  "percentComplete",
  "webseedsSendingToUs"
]

export type TorrentFieldsTypes = typeof TorrentFields[number];
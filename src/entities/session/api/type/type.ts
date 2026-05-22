export interface SessionStatsDTO {
  arguments: SessionStatsArguments,
  result: string;
}

export interface SessionStatsArguments {
  activeTorrentCount: number;
  'cumulative-stats': SessionStatsInfo;
  'current-stats': SessionStatsInfo,
  downloadSpeed: number;
  pausedTorrentCount: number;
  torrentCount: number;
  uploadSpeed: number;
}

export interface SessionStatsInfo {
  downloadedBytes: number;
  filesAdded: number;
  secondsActive: number;
  sessionCount: number;
  uploadedBytes: number;
}
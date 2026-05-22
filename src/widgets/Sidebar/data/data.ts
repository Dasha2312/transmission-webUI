import { CheckCircle, Clock, Download, List, Pause, Upload } from "lucide-react";
import type { TorrentFilterInterface } from "../types/types";

export const TORRENT_FILTER: TorrentFilterInterface[] = [
  { id: '1', labelKey: 'All Torrents', icon: List, statuses: null, isFinished: null },
  { id: '2', labelKey: 'Downloading', icon: Download, statuses: [4], isFinished: null },
  { id: '3', labelKey: 'Seeding', icon: Upload, statuses: [6], isFinished: false },
  { id: '4', labelKey: 'Completed', icon: CheckCircle, statuses: [6], isFinished: true },
  { id: '5', labelKey: 'Paused', icon: Pause, statuses: [0], isFinished: false },
  { id: '6', labelKey: 'Queued', icon: Clock, statuses: [1, 3, 5], isFinished: null },
]
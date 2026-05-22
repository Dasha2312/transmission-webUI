import type { Torrent } from "@/entities/torrent";
import type { TorrentFilterInterface } from "@/widgets/Sidebar/types/types";

export const TORRENT_STATUS = {
  0: 'Stopped',
  1: 'Queued to verify',
  2:	'Verifying',
  3:	'Queued to download',
  4:	'Downloading',
  5:	'Queued to seed',
  6:	'Seeding'
} as const;

export const TORRENT_STATUS_CODE = {
  STOPPED: 0,
  QUEUED_TO_VERIFY: 1,
  VERIFYING: 2,
  QUEUED_TO_DOWNLOAD: 3,
  DOWNLOADING: 4,
  QUEUED_TO_SEED: 5,
  SEEDING: 6,
} as const

export type TorrentStatusCode = keyof typeof TORRENT_STATUS;

export interface TorrentTableProps {
  activeFilter: TorrentFilterInterface;
  setActiveTorrent: React.Dispatch<React.SetStateAction<Torrent | null>>;
  activeTorrent: Torrent;
}
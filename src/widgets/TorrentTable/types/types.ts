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

export type TorrentStatusCode = keyof typeof TORRENT_STATUS;

export interface TorrentTableProps {
  activeFilter: TorrentFilterInterface;
  setActiveTorrent: React.Dispatch<React.SetStateAction<Torrent | null>>;
}
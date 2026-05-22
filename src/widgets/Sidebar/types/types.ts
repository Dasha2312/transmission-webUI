import type { LucideIcon } from "lucide-react";

export interface TorrentFilterInterface {
  statuses: number[] | null;
  id: string,
  labelKey: string;
  icon: LucideIcon;
  isFinished?: boolean | null;
}

export interface SidebarInterface {
  activeFilter: TorrentFilterInterface;
  setActiveFilter: (e: TorrentFilterInterface) => void;
}
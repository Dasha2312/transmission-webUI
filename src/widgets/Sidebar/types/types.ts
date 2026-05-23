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
  setActiveFilter: (filter: TorrentFilterInterface) => void;
  setActiveLabel: (label: string | null) => void;
  activeLabel: string | null
}
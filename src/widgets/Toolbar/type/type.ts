import type { Torrent } from "@/entities/torrent";
import type { SetStateAction } from "react";
import type React from "react";

export interface ToolbarProps {
  activeTorrent: Torrent | null,
  setActiveTorrent: React.Dispatch<SetStateAction<Torrent | null>>
}
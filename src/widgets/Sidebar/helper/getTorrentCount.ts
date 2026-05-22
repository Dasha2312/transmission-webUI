import type { Torrent } from "@/widgets/TorrentTable/types/types";

export function getTorrentCount(filterStatuses: number[] | null, torrents: Torrent[]) {
  if (!filterStatuses) return torrents.length

  return torrents.filter(t => filterStatuses!.includes(t.status)).length
}
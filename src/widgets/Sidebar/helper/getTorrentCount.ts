import type { Torrent } from "@/entities/torrent"
import type { TorrentFilterInterface } from "../types/types";


export function getTorrentCount(filter: TorrentFilterInterface, torrents: Torrent[]) {
  if (filter.statuses === null && filter.isFinished === null) return torrents.length

  return torrents.filter(t => {
    if (filter.isFinished !== null) {
      return t.isFinished === filter.isFinished && (filter.statuses === null || filter.statuses.includes(t.status))
    }
    return filter.statuses!.includes(t.status)
  }).length
}

export function stringToColor(str: string) {
  let hash = 0;

  for(let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  const h = hash % 360;

  return `hsl(${h}, 65%, 55%)`
}
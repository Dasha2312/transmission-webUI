import { create } from "zustand"
import type { Torrent } from "../types/interface"

type activeTorrent = {
  activeTorrentItem: Torrent | null,
  setActiveTorrentItem: (item: Torrent | ((prev: Torrent | null) => Torrent | null) | null) => void
}

export const useActiveTorrent = create<activeTorrent>((set) => ({
  activeTorrentItem: null,
  setActiveTorrentItem: (item) => set((state) => ({
    activeTorrentItem: typeof item === 'function' ? item(state.activeTorrentItem) : item
  }))
}))
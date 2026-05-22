import { TORRENT_STATUS } from "../types/types"

export function formatBytes(bytes: number): string {
  return (bytes / 1024 ** 3).toFixed(2) + ' GB'
}

export function statusColor(status: string) {
  switch(status) {
    case(TORRENT_STATUS[4]):
      return 'text-blue-500 bg-blue-500/10'
    case(TORRENT_STATUS[6]):
      return 'text-green-500 bg-green-500/10'
    case(TORRENT_STATUS[0]):
      return 'text-gray-500 bg-gray-500/10'
    default: 
      return 'text-gray-500 bg-gray-500/10'
  }
}

export function formatSpeed(bytesPerSec: number): string {
  if (bytesPerSec === 0) return '—'
  if (bytesPerSec < 1024 ** 2) return (bytesPerSec / 1024).toFixed(1) + ' KB/s'
  return (bytesPerSec / 1024 ** 2).toFixed(1) + ' MB/s'
}

export function formatEta(eta: number): string {
  if (eta < 0) return '—'
  if (eta < 60) return `${eta}s`
  if (eta < 3600) return `${Math.floor(eta / 60)}m`
  return `${Math.floor(eta / 3600)}h ${Math.floor((eta % 3600) / 60)}m`
}
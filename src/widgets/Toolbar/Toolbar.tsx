import useSessionStats from "@/entities/session/api/useSessionStats";
import { Download, Loader2, Pause, Play, Plus, Search, Settings, Trash2, Upload } from "lucide-react";
import { formatSpeed } from "../TorrentTable/helpers/helpers";
import useTorrentsStop from "@/entities/torrent/api/useTorrentsStop";
import useTorrentStart from "@/entities/torrent/api/useTorrentStart";
import type { ToolbarProps } from "./type/type";
import { TORRENT_STATUS_CODE } from "../TorrentTable/types/types";

function Toolbar({activeTorrent, setActiveTorrent}: ToolbarProps) {
  const {data, isLoading} = useSessionStats();
  const {stopTorrent, isPendingStop} = useTorrentsStop();
  const {startTorrent, isPendingStart} = useTorrentStart();

  const downloadSpeed = data?.arguments.downloadSpeed; // not work
  const uploadSpeed = data?.arguments.uploadSpeed; // not work

  const canResume = activeTorrent?.status !== TORRENT_STATUS_CODE.STOPPED;
  const isStopped = activeTorrent?.status === TORRENT_STATUS_CODE.STOPPED;
  const isSeeding = activeTorrent?.status === TORRENT_STATUS_CODE.SEEDING
  
  console.log('data?.arguments', data?.arguments)
  console.log('data?.arguments.uploadSpeed', data?.arguments.uploadSpeed)
  
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          title="addTorrent"
        >
          <Plus className="w-4 h-4" />

          Add Torrent
        </button>
        
        <div className="w-px h-6 bg-gray-300" />
        
        <button
          type="button"
          className={`p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${activeTorrent === null || canResume || isSeeding ? 'cursor-default! opacity-30' : ''}`}
          title="resume"
          disabled={activeTorrent === null || canResume || isPendingStop || isPendingStart || isSeeding}
          onClick={() => {
            startTorrent(activeTorrent!.id);
            setActiveTorrent(null)
          }}
        >
          {isPendingStart ? <Loader2 className="w-5 h-5 animate-spin" />  : <Play className="w-5 h-5" />}
        </button>
        
        <button
          type="button"
          className={`p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${activeTorrent === null || isStopped || isSeeding ? 'cursor-default! opacity-30' : ''}`}
          title="pause"
          disabled={activeTorrent === null || isPendingStop || isPendingStart || isStopped || isSeeding}
          onClick={() => {
            stopTorrent(activeTorrent!.id);
            setActiveTorrent(null)
          }}
        >
          {isPendingStop ? <Loader2 className="w-5 h-5 animate-spin" />  : <Pause className="w-5 h-5" />}
          
        </button>
        
        <button
          type="button"
          className={`p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ${activeTorrent === null ? 'cursor-default! opacity-30' : ''}`}
          title="delete"
          disabled={activeTorrent === null}
        >
          <Trash2 className="w-5 h-5" />
        </button>
        
        <div className="w-px h-6 bg-gray-300" />
        
        <button
          type="button"
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">
            <Download className="w-4 h-4" />
            <span>{isLoading ? 'Loading...' : downloadSpeed === 0 ? '0 MB/s' : formatSpeed(downloadSpeed)}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg">
            <Upload className="w-4 h-4" />
            <span><span>{isLoading ? 'Loading...' : uploadSpeed === 0 ? '0 KB/s' : formatSpeed(uploadSpeed)}</span></span>
          </div>
        </div>
        
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search torrents..."
            className="pl-9 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-64"
          />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
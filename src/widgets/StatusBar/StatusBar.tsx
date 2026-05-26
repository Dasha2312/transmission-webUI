import { useSession } from "@/entities/session/api/useSession";
import { useTorrents } from "@/entities/torrent";
import { Globe, HardDrive, Users, Wifi } from "lucide-react";
import { TORRENT_STATUS_CODE } from "../TorrentTable/types/types";

function StatusBar() {
  const { data, isError } = useSession();
  const {torrents} = useTorrents();

  const totalSeeds = torrents?.map(torrentRow => Math.max(0, ...torrentRow.trackerStats.map(t => t?.seederCount))).reduce((acc, val) => (acc+ val), 0);
  const totalPeers = torrents?.map(torrentRow => Math.max(0, ...torrentRow.trackerStats.map(t => t.leecherCount ?? 0))).reduce((acc, val) => (acc + val), 0);
  const dhtStatus = data?.arguments['dht-enabled'];

  const totalTorrents = torrents.length;
  const activeTorrents = torrents.filter(el => el.status === TORRENT_STATUS_CODE.SEEDING).length

  const isConnected = !isError && !!data;
  
    return (
    <div className="bg-white border-t border-gray-200 px-6 py-2 flex items-center justify-between text-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-gray-700">
          <Wifi className={`w-4 h-4  ${isConnected ? 'text-green-600' : 'text-red-800'}`} />
          <span className="font-medium">Connection</span>
          <span className="text-green-600">{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>

        <div className="w-px h-4 bg-gray-300" />

        <div className="flex items-center gap-2 text-gray-700">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="font-medium">Seeds:</span>
          <span className="text-blue-600">{totalSeeds}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <Users className="w-4 h-4 text-purple-600" />
          <span className="font-medium">Peers:</span>
          <span className="text-purple-600">{totalPeers}</span>
        </div>

        <div className="w-px h-4 bg-gray-300" />

        <div className="flex items-center gap-2 text-gray-700">
          <Globe className="w-4 h-4 text-orange-600" />
          <span className="font-medium">DHT:</span>
          <span className="text-orange-600">{dhtStatus ? 'True' : 'False'}</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-gray-700">
          <HardDrive className="w-4 h-4 text-gray-600" />
          <span className="font-medium">Active</span>
          <span className="text-gray-900">
            {activeTorrents} / {totalTorrents}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
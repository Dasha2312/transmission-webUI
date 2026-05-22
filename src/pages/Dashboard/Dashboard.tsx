
import type { Torrent } from "@/entities/torrent";
import type { TorrentFilterInterface } from "@/widgets/Sidebar/types/types";
import TorrentList from "@/widgets/TorrentTable/TorrentTable";

interface DashboardProps {
  activeFilter: TorrentFilterInterface;
  setActiveTorrent: React.Dispatch<React.SetStateAction<Torrent | null>>;
  activeTorrent: Torrent | null;
}

function Dashboard({activeFilter, setActiveTorrent, activeTorrent}: DashboardProps) {
  return (
    <TorrentList activeFilter={activeFilter} setActiveTorrent={setActiveTorrent} activeTorrent={activeTorrent} />
  );
}

export default Dashboard;
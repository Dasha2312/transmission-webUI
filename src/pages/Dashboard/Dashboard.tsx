
import type { Torrent } from "@/entities/torrent";
import type { TorrentFilterInterface } from "@/widgets/Sidebar/types/types";
import TorrentList from "@/widgets/TorrentTable/TorrentTable";

interface DashboardProps {
  activeFilter: TorrentFilterInterface;
  setActiveTorrent: React.Dispatch<React.SetStateAction<Torrent | null>>;
  activeTorrent: Torrent | null;
  activeLabel: string | null
}

function Dashboard({activeFilter, setActiveTorrent, activeTorrent, activeLabel}: DashboardProps) {
  return (
    <TorrentList activeFilter={activeFilter} setActiveTorrent={setActiveTorrent} activeTorrent={activeTorrent} activeLabel={activeLabel} />
  );
}

export default Dashboard;
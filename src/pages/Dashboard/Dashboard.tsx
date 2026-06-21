import type { TorrentFilterInterface } from "@/widgets/Sidebar/types/types";
import TorrentList from "@/widgets/TorrentTable/TorrentTable";

interface DashboardProps {
  activeFilter: TorrentFilterInterface;
  activeLabel: string | null
}

function Dashboard({activeFilter, activeLabel}: DashboardProps) {
  return (
    <TorrentList activeFilter={activeFilter} activeLabel={activeLabel} />
  );
}

export default Dashboard;
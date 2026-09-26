import type { TorrentFilterInterface } from "@/widgets/Sidebar/types/types";
import TorrentTable from "@/widgets/TorrentTable/TorrentTable";

interface DashboardProps {
  activeFilter: TorrentFilterInterface;
  activeLabel: string | null
}

function Dashboard({activeFilter, activeLabel}: DashboardProps) {

  return (
    <TorrentTable activeFilter={activeFilter} activeLabel={activeLabel} />
  );
}

export default Dashboard;
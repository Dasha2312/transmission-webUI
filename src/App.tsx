import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard/Dashboard";
import Toolbar from "./widgets/Toolbar/Toolbar";
import Sidebar from './widgets/Sidebar/Sidebar';
import { useSession } from "./entities/session/api/useSession";
import { useState } from "react";
import { TORRENT_FILTER } from "./widgets/Sidebar/data/data";
import type { Torrent } from "./entities/torrent";
import StatusBar from "./widgets/StatusBar/StatusBar";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionWrapper />
    </QueryClientProvider>
  )
  
}


function SessionWrapper() {
  const {
    data: session,
    isLoading: sessionLoading,
    isError: sessionError,
    error: sessionErrorObj,
  } = useSession();

  const [activeFilter, setActiveFilter] = useState(TORRENT_FILTER[0]);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [activeTorrent, setActiveTorrent] = useState<Torrent | null>(null);

  if (sessionLoading) return <p>Loading session...</p>;
  if (sessionError) return <p style={{ color: 'red' }}>{sessionErrorObj?.message}</p>;

  // console.log('session', session)
  // console.log('activeTorrent', activeTorrent)

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="bg-linear-to-r from-blue-600 to-blue-700 px-6 py-4 shadow-lg">
        <h1 className="text-white! m-0! text-xl!">qBittorrent</h1>
      </div>

      <Toolbar activeTorrent={activeTorrent} setActiveTorrent={setActiveTorrent} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} setActiveLabel={setActiveLabel} activeLabel={activeLabel} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto">
            <Dashboard activeFilter={activeFilter} setActiveTorrent={setActiveTorrent} activeTorrent={activeTorrent} activeLabel={activeLabel} />
          </div>
        </div>
        
      </div>

      <StatusBar />
    </div>
  );
}

export default App

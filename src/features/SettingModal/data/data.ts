import { Download, Gauge, Globe, Share2, Shield, Wifi } from "lucide-react";
import DownloadsBlock from "../components/DownloadsBlock";
import ConnectionBlock from "../components/ConnectionBlock";
import SpeedBlock from "../components/SpeedBlock";
import BitTorrentBlock from "../components/BitTorrentBlock";
import WebUiBlock from "../components/WebUiBlock";
import AdvancedBlock from "../components/AdvancedBlock";

export const settingsTabs = [
  { id: 'downloads', label: 'Downloads', icon: Download, component: DownloadsBlock },
  { id: 'connection', label: 'Connection', icon: Wifi, component: ConnectionBlock },
  { id: 'speedTab', label: 'Speed', icon: Gauge, component: SpeedBlock },
  { id: 'bittorrent', label: 'BitTorrent', icon: Share2, component:BitTorrentBlock },
  { id: 'webui', label: 'Web UI', icon: Globe, component: WebUiBlock },
  { id: 'advanced', label: 'Advanced', icon: Shield, component: AdvancedBlock },
];
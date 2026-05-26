import { useTorrents } from "@/entities/torrent";
import { TORRENT_FILTER } from "./data/data";
import { getTorrentCount, stringToColor } from "./helper/getTorrentCount";
import type { SidebarInterface } from "./types/types";
import useFolderInfo from "@/entities/client-specified-folder/api/useFolderInfo";
import { useSession } from "@/entities/session/api/useSession";
import { formatBytes } from "../TorrentTable/helpers/helpers";


function Sidebar({activeFilter, setActiveFilter, setActiveLabel, activeLabel}: SidebarInterface) {
  const { data } = useSession();
  const { torrents, isLoading } = useTorrents();
  const { folderInfo, folderInfoIsLoading } = useFolderInfo({dirPath: data?.arguments['download-dir']});

  const selectedCategory = activeFilter.id;

  const usedPercent = folderInfo
  ? ((folderInfo.arguments['total_size'] - folderInfo.arguments['size-bytes']) / folderInfo.arguments['total_size'] * 100).toFixed(1)
  : 0

  const torrentsLabels = [...new Set(torrents.flatMap(t => t.labels))].map(label => ({
    label,
    count: torrents.filter(el => el.labels.includes(label)).length
  }))
  
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="px-4 py-3  border-b border-gray-200">
        <h2 className="text-xs! uppercase font-semibold! text-gray-500! mb-0!">
          Filters
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {TORRENT_FILTER.map((category) => {
            const Icon = category.icon;
            const count = getTorrentCount(category, torrents);

            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-colors mb-1 ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{category.labelKey}</span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full`}
                >
                  {isLoading ? '…' : count}
                </span>
              </button>
            );
          })}
        </div>
      
        <div className="mt-6 p-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs uppercase font-semibold text-gray-500 tracking-wider">
              Labels
            </h2>
          </div>
          <div className="space-y-1">
            {torrentsLabels.map(({label, count}) => (
              <button
                key={label}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-colors
                  ${activeLabel == label ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}
                `}
                onClick={() => setActiveLabel(activeLabel === label ? null : label)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{background: stringToColor(label)}}/>
                  <span className="text-sm">{label}</span>
                </div>
                <span className="text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full">
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="space-y-2 text-xs">
          <div className="flex justify-between text-gray-600">
            <span>Free Space:</span>
            {folderInfoIsLoading 
              ? "Loading..."
              : <span className="font-medium text-gray-900">{formatBytes(folderInfo?.arguments['size-bytes'] ?? 0)}</span>
            }
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Total Size:</span>
            {folderInfoIsLoading
              ? 'Loading...'
              : <span className="font-medium text-gray-900">{formatBytes(folderInfo?.arguments['total_size'] ?? 0)}</span>
            }
          </div>
          <div className="mt-2 pt-2 border-t border-gray-200">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${usedPercent}%` }} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Sidebar;
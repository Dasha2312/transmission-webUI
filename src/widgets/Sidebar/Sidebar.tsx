import { useTorrents } from "@/entities/torrent";
import { TORRENT_FILTER } from "./data/data";
import { getTorrentCount } from "./helper/getTorrentCount";
import type { SidebarInterface } from "./types/types";


function Sidebar({activeFilter, setActiveFilter}: SidebarInterface) {
  const { torrents, isLoading } = useTorrents();

  const selectedCategory = activeFilter.id
  
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
            const count = getTorrentCount(category.statuses, torrents);

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
                  className={`text-xs px-2 py-0.5 rounded-full `}
                >
                  {isLoading ? '…' : count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}

export default Sidebar;
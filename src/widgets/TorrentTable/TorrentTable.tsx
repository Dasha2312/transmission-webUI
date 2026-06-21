import { useTorrents, type Torrent } from "@/entities/torrent";
import Table from "@/shared/UI/Table/Table";
import { TORRENT_STATUS, TORRENT_STATUS_CODE, type TorrentTableProps } from "./types/types";
import { formatBytes, formatEta, formatSpeed, statusColor } from "./helpers/helpers";
import { AlertCircle } from "lucide-react";
import { useActiveTorrent } from "@/shared/store/activeTorrent";

function TorrentTable({activeFilter, activeLabel}: TorrentTableProps) {
  const { torrents, isLoading } = useTorrents();
  const { activeTorrentItem, setActiveTorrentItem } = useActiveTorrent();

  const filteredTorrents = torrents.filter(t => {
    const filterMatch = activeFilter.isFinished !== null
      ? t.isFinished === activeFilter.isFinished && (activeFilter.statuses === null || activeFilter.statuses.includes(t.status))
      : activeFilter.statuses === null || activeFilter.statuses.includes(t.status)

    const labelMatch = activeLabel === null || t.labels.includes(activeLabel)
    return filterMatch && labelMatch
  })

  if (isLoading) return <div>Loading...</div>;

  const tableHeader = [
    {id: 1, label: 'Name'},
    {id: 2, label: 'Size'},
    {id: 3, label: 'Progress'},
    {id: 4, label: 'Status'},
    {id: 5, label: 'Down Speed'},
    {id: 6, label: 'Up Speed'},
    {id: 7, label: 'Time'},
    {id: 8, label: 'Seeds'},
    {id: 9, label: 'Peers'},
    {id: 10, label: 'Ratio'},
  ]

  // console.log('filteredTorrents', filteredTorrents)

  return (
    <div>
      <Table
        data={filteredTorrents}
        renderHeader={() => (
          tableHeader.map(({id, label}) => (
            <th key={id} className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">{label}</th>
          ))
        )}
        renderRow={(torrentRow: Torrent) => {
          // console.log('torrentRow', torrentRow)
          const maxSeeders = Math.max(0, ...torrentRow.trackerStats.map(t => t.seederCount ?? 0));
          const maxPeers = Math.max(0, ...torrentRow.trackerStats.map(t => t.leecherCount ?? 0));
          const torrentStatus = torrentRow.isFinished ? TORRENT_STATUS_CODE.COMPLETED : torrentRow.status;

          return (
            <tr className={`cursor-pointer transition-colors ${activeTorrentItem?.id === torrentRow.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`} 
            onClick={() => setActiveTorrentItem(prev => prev?.id === torrentRow.id ? null : torrentRow)}>
              <td className="px-4 py-3 max-w-[350px]">
                <div className="text-sm text-gray-900 truncate max-w-md cursor-pointer transition-colors" title={torrentRow.name}>
                  {torrentRow.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm text-gray-900 truncate max-w-md cursor-pointer transition-colors">
                  {formatBytes(torrentRow.sizeWhenDone)}
                </div>
              </td>
              <td
                className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider cursor-pointer transition-colors"
              >
                <div className="flex gap-1 flex-col">
                  {torrentRow.percentDone === 1 ? '100%' : `${(torrentRow.percentDone * 100).toFixed(2)}%`}
                  <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 transition-all duration-300 rounded-full"
                        style={{ width: `${torrentRow.percentDone * 100}%` }}
                      />
                    </div>
                </div>
              </td>
              <td
                className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider cursor-pointer transition-colors"
              >
                <div className={` gap-1 inline-flex px-2 py-1 text-xs rounded-full capitalize ${statusColor(TORRENT_STATUS[torrentStatus])}`}>
                  {torrentRow.isStalled && (<span title="No activity - torrent is stalled">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      </span>
                    )
                  }
                  {TORRENT_STATUS[torrentStatus]}
                </div>
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {formatSpeed(torrentRow.rateDownload)}
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {formatSpeed(torrentRow.rateUpload)}
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900 min-w-32 whitespace-nowrap">
                {torrentRow.rateDownload > 0 ? formatEta(torrentRow.eta) : '-'}
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {torrentRow.peersSendingToUs}({maxSeeders})
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {torrentRow.peersGettingFromUs}({maxPeers})
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
                {torrentRow.uploadRatio.toFixed(2)} / {torrentRow.seedRatioLimit.toFixed(1)}
              </td>
            </tr>
          )
        }}
      />
    </div>
  );
}

export default TorrentTable;
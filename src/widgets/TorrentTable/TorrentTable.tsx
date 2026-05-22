import { useTorrents, type Torrent } from "@/entities/torrent";
import Table from "@/shared/UI/Table/Table";
import { TORRENT_STATUS, type TorrentTableProps } from "./types/types";
import { formatBytes, formatEta, formatSpeed, statusColor } from "./helpers/helpers";

function TorrentTable({activeFilter, setActiveTorrent}: TorrentTableProps) {
  const { torrents, isLoading } = useTorrents();

  // console.log('activeFilter', activeFilter)

  const filteredTorrents = activeFilter.statuses === null ? torrents : torrents.filter(t => activeFilter.statuses?.includes(t.status) )

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

  return (
    <div>
      <Table
        data={filteredTorrents}
        renderHeader={() => (
          tableHeader.map(({id, label}) => (
            <th key={id} className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">{label}</th>
          ))
        )}
        renderRow={(torrentRow: Torrent) => {
          // console.log('torrentRow', torrentRow)
          return (
            <>
              <td className="px-4 py-3 max-w-[400px]" onClick={() => setActiveTorrent(torrentRow)}>
                <div className="text-sm text-gray-900 truncate max-w-md cursor-pointer hover:bg-gray-100 transition-colors">
                  {torrentRow.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm text-gray-900 truncate max-w-md cursor-pointer hover:bg-gray-100 transition-colors">
                  {formatBytes(torrentRow.sizeWhenDone)}
                </div>
              </td>
              <td
                className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
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
                className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <div className={` gap-1 inline-flex px-2 py-1 text-xs rounded-full capitalize ${statusColor(TORRENT_STATUS[torrentRow.status])}`}>
                  {TORRENT_STATUS[torrentRow.status]}
                </div>
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {formatSpeed(torrentRow.rateDownload)}
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {formatSpeed(torrentRow.rateUpload)}
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900 min-w-32 whitespace-nowrap">
                {formatEta(torrentRow.eta)}
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {torrentRow.peersSendingToUs}({torrentRow.peersConnected})
                {/* {torrentRow.seedRatioLimit.toFixed(1)} */}
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {torrentRow.peersGettingFromUs}({torrentRow.peersConnected})
              </td>
              <td  className="px-4 py-3 text-sm text-gray-900">
                {torrentRow.uploadRatio.toFixed(2)} / {torrentRow.seedRatioLimit.toFixed(1)}
              </td>
            </>
          )
        }}
      />
    </div>
  );
}

export default TorrentTable;
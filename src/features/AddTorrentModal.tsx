import { useSession } from "@/entities/session/api/useSession";
import useTorrentAdd from "@/entities/torrent/api/useTorrentAdd";
import { fileToBase64 } from "@/shared/helpers/helpers";
import Modal from "@/shared/UI/Modal/Modal";
import { formatBytes } from "@/widgets/TorrentTable/helpers/helpers";
import { useState } from "react";

function AddTorrentModal({onClose}: {onClose: () => void}) {
  const { data } = useSession();
  const {addTorrent, isPending, isError, error} = useTorrentAdd();

  const dirFreeSpace =  data?.arguments['download-dir-free-space'];
  const dirPathBase = data?.arguments['download-dir']

  const [paused, setPaused] = useState(true);
  const [dirPath, setDirPath] = useState(dirPathBase);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [link, setLink] = useState('');

  async function handleAddTorrent() {
    let metainfo: string | null = null
    let filename: string | null = null

    if (selectedFile) {
      metainfo = await fileToBase64(selectedFile)
    } else if (link) {
      filename = link
    }

    console.log('metainfo', metainfo)
    console.log('filename', filename)
    console.log('dirPath', dirPath)
    console.log('paused', paused)

    addTorrent({
      downloadDir: dirPath,
      paused: paused,
      metainfo,
      filename
    })

    onClose();
  }


  return (
    <Modal title="Add Torrent" isOpen={true} onClose={onClose}>
      <div className="px-6 py-4">
        <div className="mb-4">
          <div className="text-[12px]">Please select torrent files to add:</div>
          <div>
            <label htmlFor="file-input" className="sr-only cursor-pointer">Choose file</label>
            <input type="file" name="file-input" id="file-input" accept=".torrent"  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer file:bg-gray-100 file:border-0 file:me-4 file:py-2 file:px-4 pr-3 file:text-gray-700 hover:file:bg-gray-200" 
            onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)} />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="url" className="block text-[12px]">Or enter a URL:</label>
          <input type="url" name="url" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg py-2 px-4"
          value={link} 
          onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="folder-path" className="block text-[12px]">Destination folder: <strong>{formatBytes(dirFreeSpace)} Free</strong></label>
          <input type="text" name="folder-path" value={dirPath} onChange={(e) => setDirPath(e.target.value)} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg py-2 px-4" />
        </div>

        <div className="mb-4">
          <label className="flex gap-3 items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden peer"
              checked={paused}
              onChange={(e) => setPaused(e.target.checked)}
            />
            <span className="w-5 h-5 border border-slate-300 rounded peer-checked:border-blue-600 flex items-center justify-center">
              {paused && (
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m10.092.952-.005-.006-.006-.005A.45.45 0 0 0 9.43.939L4.162 6.23 1.585 3.636a.45.45 0 0 0-.652 0 .47.47 0 0 0 0 .657l.002.002L3.58 6.958a.8.8 0 0 0 .567.242.78.78 0 0 0 .567-.242l5.333-5.356a.474.474 0 0 0 .044-.65Zm-5.86 5.349V6.3Z" fill="#2563EB" stroke="#2563EB" strokeWidth=".4"/>
                </svg>
              )}
            </span>
            <span className="text-gray-700 select-none text-sm">Start when added</span>
          </label>
        </div>
      </div>

      {isError && <div className="text-red-600">{error?.message}</div>}

      <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
        <button
          onClick={onClose}
          disabled={isPending}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleAddTorrent}
          disabled={isPending}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Add
        </button>
      </div>
    </Modal>
  );
}

export default AddTorrentModal;
import { useTorrentDelete } from "@/entities/torrent/api/useTorrentDelete";
import { useActiveTorrent } from "@/shared/store/activeTorrent";
import Modal from "@/shared/UI/Modal/Modal";
import { useState } from "react";
import toast from "react-hot-toast";



function DeleteTorrentModal({onClose}: {onClose: () => void}) {
  const [deleteFiles, setDeleteFiles] = useState(false);
  const {activeTorrentItem} = useActiveTorrent();
  const {torrentDelete, isPending, isError, error} = useTorrentDelete();

  async function handleDeleteTorrent(id: number) {
    torrentDelete({ id, deleteFiles }, {
      onSuccess: () => {
        onClose();
        toast.success(`Torrent ${activeTorrentItem?.name} was removed successfully!`);
      }
    })
  }

  return (
    <Modal isOpen={true} title="Delete torrent" onClose={onClose}>
      <div className="px-6 py-4">
        <div className="mb-4">Are you sure you want to delete <strong>{activeTorrentItem?.name}</strong> torrent?</div>

        <div className="mb-4">
          <label className="flex gap-3 items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden peer"
              checked={deleteFiles}
              onChange={(e) => setDeleteFiles(e.target.checked)}
            />
            <span className="w-5 h-5 border border-slate-300 rounded peer-checked:border-blue-600 flex items-center justify-center">
              {deleteFiles && (
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m10.092.952-.005-.006-.006-.005A.45.45 0 0 0 9.43.939L4.162 6.23 1.585 3.636a.45.45 0 0 0-.652 0 .47.47 0 0 0 0 .657l.002.002L3.58 6.958a.8.8 0 0 0 .567.242.78.78 0 0 0 .567-.242l5.333-5.356a.474.474 0 0 0 .044-.65Zm-5.86 5.349V6.3Z" fill="#2563EB" stroke="#2563EB" strokeWidth=".4"/>
                </svg>
              )}
            </span>
            <span className="text-gray-700 select-none text-sm">Also delete the files from disk</span>
          </label>
        </div>

        {isError && (<p className="text-red-600">{error?.message}</p>)}
      </div>

      <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
        <button
          onClick={onClose}
          disabled={isPending}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => handleDeleteTorrent(activeTorrentItem!.id)}
          disabled={isPending}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default DeleteTorrentModal;
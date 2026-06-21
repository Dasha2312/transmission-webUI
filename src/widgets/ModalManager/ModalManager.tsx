import AddTorrentModal from "@/features/AddTorrentModal";
import DeleteTorrentModal from "@/features/DeleteTorrentModal";
import { useModalState } from "@/shared/store/modalStore";
import { ModalType } from "@/shared/types/interface";

function ModalManager() {
  const {type, setType} = useModalState();
  // console.log('type', type)

  function onClose() {
    setType(null)
  }

  switch(type) {
    case ModalType.DELETE_TORRENT: return <DeleteTorrentModal onClose={onClose} />
    case ModalType.ADD_TORRENT: return <AddTorrentModal onClose={onClose} />
    default: return null
  }
}

export default ModalManager;
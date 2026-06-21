import { create } from "zustand"

type ModalStore = {
  type: 'add-torrent' | 'delete-torrent' | 'torrent-details' | null;
  setType: (type: ModalStore['type']) => void;
}

export const useModalState = create<ModalStore>((set) => ({
  type: null,
  setType: (type) => set(() => ({type: type})) 
}))

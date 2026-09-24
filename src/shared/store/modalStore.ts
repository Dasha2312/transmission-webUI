import { create } from "zustand"
import type { ModalType } from "../types/interface";

type ModalStore = {
  type: (typeof ModalType)[keyof typeof ModalType] | null;
  setType: (type: ModalStore['type']) => void;
}

export const useModalState = create<ModalStore>((set) => ({
  type: null,
  setType: (type) => set(() => ({type: type})) 
}))

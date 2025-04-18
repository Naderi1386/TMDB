import { create } from "zustand";

interface StoreType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const useStore = create<StoreType>((set) => ({
  count: 0,
  increase: () => set((store) => ({ count: store.count + 1 })),
  decrease: () => set((store) => ({ count: store.count - 1 })),
}));

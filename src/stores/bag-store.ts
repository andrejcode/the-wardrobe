import { BagItem } from '@/lib/definitions';
import { createStore } from 'zustand/vanilla';

export type BagState = {
  bag: BagItem[];
};

export type BagActions = {
  addToBag: (item: BagItem) => void;
  removeFromBag: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

export type BagStore = BagState & BagActions;

export const defaultInitState: BagState = {
  bag: [],
};

export function createBagStore(initState: BagState = defaultInitState) {
  return createStore<BagStore>()((set) => ({
    ...initState,
    addToBag: (item: BagItem) =>
      set((state) => ({ bag: [...state.bag, item] })),
    removeFromBag: (id: number) =>
      set((state) => ({ bag: state.bag.filter((item) => item.id !== id) })),
    updateQuantity: (id: number, quantity: number) =>
      set((state) => ({
        bag: state.bag.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      })),
  }));
}

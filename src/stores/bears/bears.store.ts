import { create } from "zustand";

interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears: (by: number) => void;
}

export const useBearStore = create<BearsState>()((set) => ({
  blackBears: 0,
  polarBears: 1,
  pandaBears: 0,

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
}));

import { create } from "zustand";

interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
}

export type bearKey = "blackBears" | "polarBears" | "pandaBears";
export type increaseBearKey =
  | "increaseBlackBears"
  | "increasePolarBears"
  | "increasePandaBears";

export const useBearStore = create<BearsState>()((set) => ({
  blackBears: 10,
  polarBears: 1,
  pandaBears: 0,

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),

  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),

  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),
}));

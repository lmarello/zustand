import { create } from "zustand";

type Bear = {
  id: number;
  name: string;
};

interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  computed: {
    totalBears: number;
  };

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
}

export type bearKey = "blackBears" | "polarBears" | "pandaBears";
export type increaseBearKey =
  | "increaseBlackBears"
  | "increasePolarBears"
  | "increasePandaBears";

export const useBearStore = create<BearsState>()((set, get) => ({
  blackBears: 10,
  polarBears: 1,
  pandaBears: 0,

  bears: [{ id: 1, name: "Bear #1" }],

  computed: {
    get totalBears(): number {
      return (
        get().blackBears +
        get().pandaBears +
        get().polarBears +
        get().bears.length
      );
    },
  },

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),

  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),

  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),

  addBear: () =>
    set((state) => {
      const nextId = get().bears.length + 1;
      return {
        bears: [...state.bears, { id: nextId, name: `Oso #${nextId}` }],
      };
    }),

  clearBears: () => set(() => ({ bears: [] })),
}));

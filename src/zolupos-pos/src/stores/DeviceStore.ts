import create from "zustand";
import { device } from "../hooks/useDevice";

interface IDeviceStore {
  device: device | null;
  setDevice: (device: device) => void;
}

export const useDeviceStore = create<IDeviceStore>((set) => ({
  device: null,
  setDevice: (device: device) => set((state) => ({ ...state, device })),
}));

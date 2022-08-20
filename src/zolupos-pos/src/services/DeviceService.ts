import axios from "axios";
import { device } from "../hooks/useDevice";
import ResultWrapper from "../wrappers/ResultWrapper";

export const getAllDevices = async () => {
  let devices = await axios.get<ResultWrapper<Array<device>>>("https://localhost:7073/api/devices");
  return devices.data;
}

export const getDeviceById = async (id: number) => {
  let devices = await axios.get<ResultWrapper<device>>(`https://localhost:7073/api/devices/${id}`);
  return devices.data;
}

export const setup = async (devStr: string) => {
  let device = await axios.get<ResultWrapper<device>>(`https://localhost:7073/api/devices/setup?devName=${devStr}`);
  return device.data;
}
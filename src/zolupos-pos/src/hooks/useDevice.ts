import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { z } from "zod";
import { ITransaction } from "../interface/ITransaction";

export interface device {
  deviceId: number;
  deviceName: string;
  lastUsed: Date;
  registrationDate: Date;
  transactions: ITransaction | null;
}

export const useDevice = () => {
  return useQuery(["device"], () => {
    const deviceCredentials = Cookies.get("zolupos-device-creds");
    if (deviceCredentials != null) {
      try {
        let res = JSON.parse(deviceCredentials);
        return res;
      } catch (e) {
        toast.error("Unkown Error Occured");
      }
    } else {
      toast.error("Device is not registered.");
    }
  });
};

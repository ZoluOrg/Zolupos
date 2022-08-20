import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query"
import { z } from "zod";

const deviceValidator = z.object({
  deviceId: z.number(),
  deviceName: z.string(),
  RegistrationDate: z.date(),
  lastUsed: z.date(),
})

export type device = z.infer<typeof deviceValidator>;

export const useDevice = () => {
  return useQuery(["device"], () => {
    const deviceCredentials = Cookies.get("zolupos-device-creds");
    if (deviceCredentials != null) {
      try {
        let res = JSON.parse(deviceCredentials);
        return deviceValidator.parse(res);
      } catch(e) {
        console.log(e);
      }
    } else {
      toast.error("Device is not registered.");
    }
  })
}
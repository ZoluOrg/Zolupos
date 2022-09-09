import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { Button } from "../../components/Button";
import { CustomSpinner } from "../../components/CustomSpinner";
import { Modal } from "../../components/Modal";
import { Select } from "../../components/Select";
import { device } from "../../hooks/useDevice";
import { getAllDevices, setup } from "../../services/DeviceService";
import ResultWrapper from "../../wrappers/ResultWrapper";

export const NotRegisteredModal = () => {
  const [devicesList, setDevicesList] = useState<Array<device>>([]);
  const [selected, setSelected] = useState<string>("");

  const devices = useQuery(["devices"], getAllDevices, {
    onSuccess: (data: ResultWrapper<Array<device>>) => {
      setDevicesList(data.receive);
    },
  });

  const regis = useQuery(["device"], () => setup(selected), {
    enabled: false,
    onSuccess: (data: ResultWrapper<device>) => {
      toast(`Registered as ${data.receive.deviceName}`, { icon: "📡" });
      Cookies.set("zolupos-device-creds", JSON.stringify(data.receive!));
    },
    onError: (e) => {
      if (axios.isAxiosError(e)) toast.error(e.message);
    },
  });

  return (
    <Modal
      isOpen={Cookies.get("zolupos-device-creds") == null}
      className="p-5 w-96"
    >
      <div className="w-full flex items-center justify-between">
        <span className="text-xl font-bold">Register Terminal</span>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {devices.isFetching ? (
          <div className="flex items-center gap-2">
            <CustomSpinner dark />
            Loading device list
          </div>
        ) : (
          <>
            <Select onChange={(ev) => setSelected(ev.currentTarget.value)}>
              <option>Select Device</option>
              {devicesList.map((val, index) => (
                <option key={index}>{val.deviceName}</option>
              ))}
            </Select>
            <Button
              buttonColor="coal"
              isLoading={devices.isFetching}
              onClick={() => {
                if (selected == "Select Device") toast.error("MAKE a selection!");
                else regis.refetch();
              }}
            >
              Register
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
};

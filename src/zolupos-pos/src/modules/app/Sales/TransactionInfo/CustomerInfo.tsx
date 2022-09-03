import { AxiosError } from "axios";
import { PaperPlane, PaperPlaneTilt } from "phosphor-react";
import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Button } from "../../../../components/Button";
import { CustomSpinner } from "../../../../components/CustomSpinner";
import { getCustomerById } from "../../../../services/CustomerService";
import { useSaleStore } from "../../../../stores/SalesStore";

export const CustomerInfo = () => {
  const saleStore = useSaleStore();
  const { data, isFetching } = useQuery(
    "customer-info",
    () => getCustomerById(saleStore.selected?.customerId!),
    {
      enabled: saleStore.selected?.customerId != null,
      refetchOnWindowFocus: false,
      onError: (err: AxiosError) => {
        toast.error(err.message);
      },
    }
  );
  return (
    <div className="flex border border-mallow-5 bg-mallow-bg-1 rounded-lg px-[25px] py-[22px]">
      {isFetching ? (
        <div className="flex h-full w-full items-center justify-center flex-col space-y-2">
          <CustomSpinner dark />
          <span className="font-bold">Loading Customer Data</span>
        </div>
      ) : saleStore.selected?.customerId != null ? (
        <div className="w-full flex flex-col space-y-2">
          <div className="img-cont flex w-full items-center space-x-2">
            <img
              src={
                data?.receive.customerProfile == null
                  ? `https://avatars.dicebear.com/api/micah/${data?.receive.customerFullName}.svg`
                  : `https://localhost:7073/static/Customers/ProfileImages/${data?.receive.customerProfile}`
              }
              className="w-24 h-24 border border-coal-1 rounded-full"
            />
            <div className="flex flex-col space-y-1">
              <span className="text-xl font-bold">
                {data?.receive.customerFullName}
              </span>
              <span>{data?.receive.customerEmail}</span>
            </div>
          </div>
          <Button buttonColor="mallow">
            <div className="flex items-center space-x-2">
              <span>Visit</span>
              <PaperPlaneTilt size={20} />
            </div>
          </Button>
        </div>
      ) : (
        <span>No Customer Assigned</span>
      )}
    </div>
  );
};

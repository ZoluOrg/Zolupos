import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../../components/UI/Button";
import { Input } from "../../../components/UI/Input";
import { getProducts } from "../../inventory/Helper";

export const SearchProduct = () => {
  const router = useRouter();
  const onlick = async () => {
    const result = await getProducts();
    console.log(result);
  };
  return (
    <div className="h-14 border-b px-5 items-center flex gap-1">
      <Input placeholder="Enter Barcode Here To Add" className="w-full" />
      <Button onClick={async () => await onlick()}>Add</Button>
    </div>
  );
};


import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Button } from "../../../components/UI/Button";
import { Input } from "../../../components/UI/Input";
import { usePosContext } from "../../../context/PosContext";
import { getProducts } from "../../inventory/Helper";

export const SearchProduct = () => {
  const router = useRouter();
  const ctx = usePosContext();
  const onlick = async () => {
    let prods = ctx.products![0];
    console.log(prods);
    ctx.addToPunched(prods);
  };
  return (
    <div className="h-14 border-b px-5 items-center flex gap-1">
      <Input placeholder="Enter Barcode Here To Add" className="w-full" />
      <Button onClick={async () => await onlick()}>Add</Button>
    </div>
  );
};
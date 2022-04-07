import React, { useEffect } from "react";
import { Button } from "../../../components/UI/Button";
import { Input } from "../../../components/UI/Input";
import { IPunched } from "../../../interfaces/transaction/IPunched";

interface Props {
  pr: IPunched;
}

export const PunchedButton: React.FC<Props> = ({ pr }) => {
  const onQuantityChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(pr.Quantity);
  };
  return (
    <tr className="bg-slate-50 border hover:bg-slate-100 transition ease-in-out box-border">
      <td className=" py-2 text-center">{pr.Product.productName}</td>
      <td className=" py-2 text-center">{pr.Product.barCode}</td>
      <td className=" py-2 text-center">
        <div className="flex gap-1 w-full justify-center">
          <Input
            className="w-20"
            value={pr.Quantity}
            onChange={onQuantityChange}
            type="number"
          />
        </div>
      </td>
      <td className=" py-2 text-center">
        <Input className="w-20" />
      </td>
      <td className=" py-2 text-center">{pr.Product.productWholeSaleCost}</td>
      <td className=" py-2 text-center flex justify-center w-full h-full">
        <Button>Del</Button>
      </td>
    </tr>
  );
};

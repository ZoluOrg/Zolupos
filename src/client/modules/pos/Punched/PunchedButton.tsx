import React, { useEffect } from "react";
import { Button } from "../../../components/UI/Button";
import { Input } from "../../../components/UI/Input";
import { usePosContext } from "../../../context/PosContext";
import { IProduct } from "../../../interfaces/IProduct";
import { BsEye } from "react-icons/bs";

interface Props {
  pr: IProduct;
}

export const PunchedButton: React.FC<Props> = ({ pr }) => {
  return (
    <tr className="bg-slate-50 border hover:bg-slate-100 transition ease-in-out box-border">
      <td className="px-5 py-2 text-center">{pr.productName}</td>
      <td className="px-5 py-2 text-center">{pr.barCode}</td>
      <td className="px-5 py-2 text-center">
        <div className="flex gap-1 w-full justify-center">
          <Button Color="secondary">-</Button>
          <Input className="w-20" />
          <Button Color="secondary">+</Button>
        </div>
      </td>
      <td className="px-5 py-2 text-center">{pr.productWholeSaleCost}</td>
      <td className="px-5 py-2 text-center">{pr.productWholeSaleCost}</td>
      <td className="px-5 py-2 text-center flex justify-center w-full h-full">
        <Button>Del</Button>
      </td>
    </tr>
  );
};

import { Minus, Plus, Trash } from "phosphor-react";
import React, { FC, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

interface addItemProps {
  itemName: string;
  price: number;
}

export const AddedItem: FC<addItemProps> = ({ itemName, price }) => {
  const [total, setTotal] = useState<number>(price);
  return (
    <tr className="">
      <td>{itemName}</td>
      <td>{price}</td>
      <td>1</td>
      <td>{total}</td>
      <td>
        <Button>
          <Trash size={24} />
        </Button>
      </td>
    </tr>
  );
};

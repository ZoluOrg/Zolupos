import React from "react";
import { usePosContext } from "../../../context/PosContext";
import { NothingPunched } from "./NothingPunched";
import { PunchedButton } from "./PunchedButton";

export const PuncedList = () => {
  const ctx = usePosContext();
  return (
    <div className="h-full w-full overflow-y-scroll">
      {ctx.punched.length != 0 ? <table className="table-auto w-full border border-collapse">
        <thead>
          <tr>
            <th className="p-5 border">Product Name</th>
            <th className="p-5 border">Product Code</th>
            <th className="p-5 border">Quantity</th>
            <th className="p-5 border">Disc %</th>
            <th className="p-5 border">Total</th>
            <th className="p-5 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {ctx.punched.map((pr, idx) => (
            <PunchedButton pr={pr} />
          ))}
        </tbody>
      </table>:
      <NothingPunched/>}
    </div>
  );
};

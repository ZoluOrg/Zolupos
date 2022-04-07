import React from "react";
import { usePunchedContext } from "../../../context/pos/PunchedContext";
import { NothingPunched } from "./NothingPunched";
import { PunchedButton } from "./PunchedButton";

export const PuncedList = () => {
  const punchedContext = usePunchedContext();
  return (
    <div className="h-full w-full overflow-y-scroll">
      {punchedContext.punched.length != 0 ? <table className="table-auto w-full border border-collapse">
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
          {punchedContext.punched.map((pr, idx) => (
            <PunchedButton pr={pr} />
          ))}
        </tbody>
      </table>:
      <NothingPunched/>}
    </div>
  );
};

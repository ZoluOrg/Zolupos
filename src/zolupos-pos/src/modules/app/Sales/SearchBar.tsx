import React from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const SearchBar = () => {
  return (
    <div className="w-full p-2 bg-mallow-bg-1 border border-mallow-5 rounded-lg flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Input placeholder="Transaction ID" />
        <Button>Search</Button>
      </div>
      <div className="flex items-center gap-2">
        <span>Entries</span>
        <select className="border border-mallow-5 rounded-lg">
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
    </div>
  );
};

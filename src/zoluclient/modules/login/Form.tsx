import Image from "next/image";
import React from "react";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Input } from "../../components/Input";
import zolulogo from "../../components/Zolulogo.svg";

export const Form = () => {
  return (
    <div className="border-2 border-mallow-3 rounded-lg py-8 px-6">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="logo">
          <Image src={zolulogo} />
        </div>
        <div className="sub flex items-center justify-center">
          <span className="text-lg font-bold">Login</span>
        </div>
        <div className="forms flex flex-col gap-2 mt-9">
          <Input className="w-96" placeholder="Name" />
          <Input className="w-96" placeholder="Password" />
          <Checkbox/>
          <Button className="mt-8">Submit</Button>
        </div>
      </div>
    </div>
  );
};

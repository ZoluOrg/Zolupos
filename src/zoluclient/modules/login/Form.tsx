import Image from "next/image";
import React from "react";
import zolulogo from "../../components/Zolulogo.svg";

export const Form = () => {
  return (
    <div className="border border-mallow-3 rounded-lg py-8 px-6">
      <div className="logo">
        <Image src={zolulogo} />
      </div>
      <div className="sub flex items-center justify-center">
        <span className="text-lg font-bold">Login</span>
      </div>
    </div>
  );
};

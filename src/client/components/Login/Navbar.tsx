import React from "react";
import { Logo } from "../icons/Logo";
import { Link } from "../UI/Link";

export const Navbar = () => {
  return (
    <div className="navcont w-full bg-ocean-lighter bg-opacity-20 p-5 flex flex-row gap-2 items-center justify-around">
      <div className="Logo flex flex-row gap-2 items-center">
        <Logo />
        <span className="font-bold text-3xl">Zolupos</span>
      </div>
      <div className="links flex gap-3">
        <div className="About">
          <Link href="">About</Link>
        </div>
        <div className="About">
          <Link href="">Privacy Policy</Link>
        </div>
        <div className="About">
          <Link href="">User Notice</Link>
        </div>
      </div>
    </div>
  );
};

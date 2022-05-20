import React, { useEffect, useState } from "react";
import { Zolulogo } from "../../../components/Zolulogo";
import { Button } from "../../../components/Button";
import { ArrowLeft, CaretDown } from "phosphor-react";
import { CurrentTime } from "../../../components/CurrentTime";
import Image from "next/image";
import { useEmployeeCredentialsContext } from "../../../context/EmployeeCredentialsContext";
import { CustomSpinner } from "../../../components/CustomSpinner";
import Link from "next/link";
import { Menu, MenuItems } from "../../../components/Menu";
import Router from "next/router";
import ContentLoader from "react-content-loader";
import dynamic from "next/dynamic";

export const NavbarComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const employeeCreds = useEmployeeCredentialsContext();
  useEffect(() => {
    console.log(employeeCreds.creds?.firstName);
    setIsLoading(false);
  }, [employeeCreds]);

  return (
    <div className="bg-coal-1 py-3.5 px-6 w-full text-mallow-1 flex justify-between">
      <div className="left-buttons flex items-center gap-6">
        <div className="logo">
          <Zolulogo light />
        </div>
        <div className="buttons flex gap-3.5">
          <Button
            buttonColor="coal"
            buttonSpacing="xs"
            onClick={() => Router.back()}
          >
            <ArrowLeft size={21} weight="bold" />
          </Button>
        </div>
        <div className="time">
          <CurrentTime />
        </div>
      </div>
      <div className="right-buttons flex items-center gap-3.5">
        <div className="shortcuts flex gap-5 font-normal">
          <Link href="#">Shortcuts</Link>
          <Link href="#">Settings</Link>
        </div>
        <div className="profile">
          <Menu
            Look={
              <div className="profile flex items-center gap-1.5">
                {!isLoading && (
                  <Image
                    src={employeeCreds.creds?.profileURL!}
                    height={24}
                    width={24}
                    className="rounded-full"
                  />
                )}
                <CaretDown weight="fill" />
              </div>
            }
          >
            <MenuItems>Profile</MenuItems>
            <MenuItems>Settings</MenuItems>
            <MenuItems>Logout</MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export const Navbar = dynamic<{}>(
  () => import("../Navbar/Navbar").then((mod) => mod.NavbarComponent),
  { ssr: false }
);

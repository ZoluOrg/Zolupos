import React, { useEffect, useState } from "react";
import { Zolulogo } from "../../../components/Zolulogo";
import { Button } from "../../../components/Button";
import { ArrowLeft, CaretDown } from "phosphor-react";
import { CurrentTime } from "../../../components/CurrentTime";
import Image from "next/image";
import { useRouter } from "next/router";
import { UseEmployeeCredentialsContext } from "../../../context/EmployeeCredentialsContext";
import { CustomSpinner } from "../../../components/CustomSpinner";
import Link from "next/link";
import { NavbarDropdownLink } from "./NavbarDropdownLink";
import { Menu, MenuItems } from "../../../components/Menu";

export const Navbar = () => {
  const [IsLoading, SetIsLoading] = useState<boolean>(true);
  const [ShowDropDown, SetShowDropdown] = useState<boolean>(true);
  const Router = useRouter();
  const EmployeeCreds = UseEmployeeCredentialsContext();
  useEffect(() => {
    console.log(EmployeeCreds.Creds?.FirstName);
    SetIsLoading(false);
  }, [EmployeeCreds]);

  return (
    <>
      {IsLoading ? (
        <div className="flex h-full items-center justify-center">
          <CustomSpinner dark />
        </div>
      ) : (
        <div className="bg-coal-1 py-3.5 px-6 w-full text-mallow-1 flex justify-between relative">
          <div className="left-buttons flex items-center gap-6">
            <div className="logo">
              <Zolulogo light />
            </div>
            <div className="buttons flex gap-3.5">
              <Button Color="coal" Spacing="xs" onClick={() => Router.back()}>
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
                    <Image
                      src={EmployeeCreds.Creds?.profileURL!}
                      height={24}
                      width={24}
                      className="rounded-full"
                    />
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
      )}
    </>
  );
};

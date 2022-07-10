import React, { useEffect, useState } from "react";
import { Zolulogo } from "../../../components/Zolulogo";
import { Button } from "../../../components/Button";
import { ArrowLeft, ArrowRight, CaretDown } from "phosphor-react";
import { CurrentTime } from "../../../components/CurrentTime";
import { Menu, MenuItems } from "../../../components/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useEmployeeCredential, useEmployeeCreds } from "../../../context/EmployeeCredentialContext";
import styles from "../../../styles/app/Navbar.module.scss";

export const Navbar = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const test = useEmployeeCreds();
  useEffect(() => {
    setIsLoading(false);
  }, [test]);

  return (
    <div className="bg-coal-1 pt-[14px] pb-[14px] px-6 w-full text-mallow-1 flex justify-between">
      <div className="flex items-center gap-6">
        <div className="logo">
          <Zolulogo light />
        </div>
        <div className="flex gap-[14px]">
          <Button
            buttonColor="coal"
            buttonSpacing="xs"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={21} weight="bold" />
          </Button>
          <Button
            buttonColor="coal"
            buttonSpacing="xs"
            onClick={() => navigate(1)}
          >
            <ArrowRight size={21} weight="bold" />
          </Button>
        </div>
        <div className="time">
          <CurrentTime />
        </div>
      </div>
      <div className="flex items-center gap-[14px]">
        <div className="flex items-center gap-[10px]">
          <Link to="#">{test.data?.firstName}</Link>
          <Link to="#">Settings</Link>
        </div>
        <div className="profile">
          <Menu
            Look={
              <div className="flex items-center gap-[6px]">
                <img
                    src="https://random.imagecdn.app/64/64"
                    className="w-6 h-6 rounded-full"
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
  );
};

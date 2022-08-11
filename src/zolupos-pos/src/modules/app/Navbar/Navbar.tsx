import { Zolulogo } from "../../../components/Zolulogo";
import { Button } from "../../../components/Button";
import { ArrowLeft, ArrowRight, CaretDown } from "phosphor-react";
import { CurrentTime } from "../../../components/CurrentTime";
import { Menu, MenuItems } from "../../../components/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useEmployeeCreds } from "../../../hooks/useEmployeeCreds";

export const Navbar = () => {
  const navigate = useNavigate();
  const { data } = useEmployeeCreds();

  return (
    <div className="bg-coal-1 pt-[14px] pb-[14px] px-6 w-full text-mallow-1 flex justify-between max-h-[60px]">
      <div className="flex items-center gap-6">
        <div className="logo">
          <Zolulogo light />
        </div>
        <div className="flex gap-[14px]">
          <Button
            buttonColor="coal"
            buttonSize="small"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={21} weight="bold" />
          </Button>
          <Button
            buttonColor="coal"
            buttonSize="small"
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
          <Link to="#">Shortcuts</Link>
          <Link to="#">Settings</Link>
        </div>
        <div className="profile">
          <Menu
            menuClassName="left-auto right-5"
            Look={(show) => (
              <div className="flex items-center gap-[6px]">
                <img
                  src={
                    data?.profile == null
                      ? `https://avatars.dicebear.com/api/micah/${data?.fullName}.svg`
                      : `https://localhost:7073/static/Employees/ProfileImages/${data?.profile}`
                  }
                  className="w-6 h-6 rounded-full border-green-400 border-2"
                />
                <span>{data?.firstName}</span>
                <CaretDown
                  weight="fill"
                  className={`transition ${show ? "" : "rotate-180"}`}
                />
              </div>
            )}
          >
            <MenuItems>Your profile</MenuItems>
            <MenuItems>Account settings</MenuItems>
            <MenuItems>Logout</MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

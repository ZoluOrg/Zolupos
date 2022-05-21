import React, { useEffect, useState } from "react";
import { Zolulogo } from "../../../components/Zolulogo";
import { Button } from "../../../components/Button";
import { ArrowLeft, ArrowRight, CaretDown } from "phosphor-react";
import { CurrentTime } from "../../../components/CurrentTime";
import { Menu, MenuItems } from "../../../components/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useEmployeeCredential } from "../../../context/EmployeeCredentialContext";
import styles from "../../../styles/app/Navbar.module.scss";

export const Navbar = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const employeeCreds = useEmployeeCredential();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(employeeCreds.creds?.firstName);
    setIsLoading(false);
  }, [employeeCreds]);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.leftControls}>
        <div className="logo">
          <Zolulogo light />
        </div>
        <div className={styles.pageHistoryButtons}>
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
      <div className={styles.rightControls}>
        <div className={styles.navbarLinks}>
          <Link to="#">Shortcuts</Link>
          <Link to="#">Settings</Link>
        </div>
        <div className="profile">
          <Menu
            Look={
              <div className={styles.profileButton}>
                <img
                    src={employeeCreds.creds?.profileURL!}
                    className={styles.profileImg}
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

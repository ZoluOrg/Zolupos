import React, { useEffect, useState } from "react";
import { Zolulogo } from "../../components/Zolulogo";
import { Button } from "../../components/Button";
import { ArrowLeft } from "phosphor-react";
import { CurrentTime } from "../../components/CurrentTime";
import Image from "next/image";
import { useRouter } from "next/router";
import { UseEmployeeCredentialsContext } from "../../context/EmployeeCredentialsContext";
import { CustomSpinner } from "../../components/CustomSpinner";

export const Navbar = () => {
  const [IsLoading, SetIsLoading] = useState<boolean>(true);
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
        <div className="bg-coal-1 py-3.5 px-6 w-full text-mallow-1 flex justify-between">
          <div className="left-buttons flex items-center gap-6">
            <div className="logo">
              <Zolulogo light />
            </div>
            <div className="buttons flex gap-3.5">
              <Button
                Color="coal"
                Spacing="xtrasmall"
                onClick={() => Router.back()}
              >
                <ArrowLeft size={21} weight="bold" />
              </Button>
            </div>
            <div className="time">
              <CurrentTime />
            </div>
          </div>
          <div className="right-buttons flex items-center gap-6">
            <div className="profile flex items-center">
              <Image
                src={EmployeeCreds.Creds?.profileURL!}
                height={24}
                width={24}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

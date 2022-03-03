import { useRouter } from "next/router";
import React from "react";
import { BiHome } from "react-icons/bi";
import { Button } from "../../../components/UI/Button";
import { CurrentTime } from "../../../components/UI/CurrentTime";

export const TopBar = () => {
  const router = useRouter();
  return (
    <div className="topbar flex flex-row items-center justify-between px-5 border-b h-14 w-full">
      <Button
        Color="primary"
        Icon={<BiHome />}
        onClick={() => router.push("../home")}
      >
        Home
      </Button>
      <CurrentTime />
    </div>
  );
};

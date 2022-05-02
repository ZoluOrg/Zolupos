import React from "react";
import { Zolulogo } from "../../components/Zolulogo";
import { Button } from "../../components/Button";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { CurrentTime } from "../../components/CurrentTime";
import { useRouter } from "next/router";

export const Navbar = () => {
  const Router = useRouter();

  return (
    <div className="bg-coal-1 py-3.5 px-6 w-full text-mallow-1">
      <div className="right-buttons flex items-center gap-6">
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
          <Button Color="coal" Spacing="xtrasmall">
            <ArrowRight size={21} weight="bold" />
          </Button>
        </div>
        <div className="time">
          <CurrentTime />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Home: React.FC<{}> = ({}) => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <Input placeholder="test"/>

      <Button buttonColor="mallow">Hello World</Button>
    </div>
  );
};

export default Home;

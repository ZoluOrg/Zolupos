import React from "react";
import { Button } from "../components/Button";

const Home: React.FC<{}> = ({}) => {
  return <div className="flex items-center justify-center h-screen">
    <Button buttonColor="mallow" buttonSize="small">Hello World</Button>
  </div>
};

export default Home;
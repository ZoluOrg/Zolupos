import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "./components/Button";
import { CurrentTime } from "./components/CurrentTime";
import { CustomSpinner } from "./components/CustomSpinner";
import { Menu } from "./components/Menu";
import logo from "./logo.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      test
    </div>
  );
}

export default App;

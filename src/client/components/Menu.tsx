import React, {
  ButtonHTMLAttributes,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./Button";

interface MenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  Look: ReactNode;
}

interface MenuItemProps {
  children: ReactNode;
  Icon?: ReactNode;
}

export const Menu: FC<MenuProps> = ({ children, Look, ...props }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  let cont = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  });

  const clickedOutside = (Event: MouseEvent) => {
    if (!cont.current?.contains(Event.target as Node) && cont.current) {
      setShowMenu(false);
    }
  };

  return (
    <div
      className="profile-dropdown rounded-lg shadow-xl right-4 left-auto flex flex-col gap-1"
      ref={cont}
    >
      <div className="menu">
        <Button
          buttonColor="coal"
          buttonSpacing="xs"
          {...props}
          onClick={() => setShowMenu(!showMenu)}
        >
          {Look}
        </Button>
        {showMenu && (
          <ul className="absolute rounded-lg p-1 bg-coal-2 left-auto right-5 border-2 border-coal-1">
            {children}
          </ul>
        )}
      </div>
    </div>
  );
};

export const MenuItems: FC<MenuItemProps> = ({ children, Icon }) => {
  return (
    <li className="p-2 bg-coal-2 rounded-lg hover:bg-coal-3 shadow-lg cursor-pointer">
      {children}
    </li>
  );
};

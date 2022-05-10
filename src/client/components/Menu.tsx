import React, { ButtonHTMLAttributes, FC, ReactNode, useState } from "react";
import { Button } from "./Button";

// TODO: Migrate Menu Module

interface MenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  Look: ReactNode;
}

interface MenuItemProps {
  children: ReactNode;
  Icon?: ReactNode;
}

export const Menu: FC<MenuProps> = ({ children, Look, ...props }) => {
  const [ShowMenu, SetShowMenu] = useState<boolean>(false);
  return (
    <div className="profile-dropdown py-2 rounded-lg shadow-xl right-4 left-auto flex flex-col gap-1">
      <div className="menu">
        <Button
          Color="coal"
          Spacing="xs"
          {...props}
          onClick={() => SetShowMenu(!ShowMenu)}
        >
          {Look}
        </Button>
        {ShowMenu && <ul className="absolute rounded-lg p-1 bg-coal-2 left-auto right-0">{children}</ul>}
      </div>
    </div>
  );
};

export const MenuItems: FC<MenuItemProps> = ({ children, Icon }) => {
  return (
    <li className="p-2 bg-coal-2 rounded-lg hover:bg-coal-3 shadow-lg cursor-pointer">
      {children}
    </li>
  )
}

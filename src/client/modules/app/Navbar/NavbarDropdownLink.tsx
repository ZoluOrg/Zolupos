import Link, { LinkProps } from "next/link";
import React, { FC, ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  Shortcut?: string;
}

export const NavbarDropdownLink: FC<Props> = ({
  children,
  Shortcut = "",
  ...props
}) => {
  return (
    <div className="hover:bg-accent-1 px-5 py-1 w-full flex flex-grow text-sm">
      <Link className="" {...props} passHref>
        <div className="link mr-5">{children}</div>
      </Link>
    </div>
  );
};



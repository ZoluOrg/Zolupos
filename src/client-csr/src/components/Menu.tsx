import React, {
  ButtonHTMLAttributes,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown } from "phosphor-react";

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
          <div className="flex items-center gap-1">
            {Look}
            <CaretDown weight="fill" className={`transition ${showMenu ? "" : "rotate-180"}`} />
          </div>
        </Button>
        <AnimatePresence>
          {showMenu && (
            <motion.ul
              className="absolute rounded-lg bg-coal-2 left-auto right-5 z-10 mt-1"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {children}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const MenuItems: FC<MenuItemProps> = ({ children, Icon }) => {
  return (
    <li className="m-1 px-3 py-1.5 bg-coal-2 rounded-lg hover:bg-coal-3 cursor-pointer text-mallow-1 font-bold">
      {children}
    </li>
  );
};

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

interface MenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  menuClassName?: string;
  Look(showMenu: boolean): ReactNode;
}

interface MenuItemProps {
  children: ReactNode;
  Icon?: ReactNode;
}

export const Menu: FC<MenuProps> = ({ children, Look, menuClassName, ...props }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  let container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  });

  const clickedOutside = (Event: MouseEvent) => {
    if (!container.current?.contains(Event.target as Node) && container.current) {
      setShowMenu(false);
    }
  };

  return (
    <div
      className="profile-dropdown rounded-lg right-4 left-auto flex flex-col gap-1 "
      ref={container}
    >
      <div className="menu">
        <Button
          buttonColor="coal"
          buttonSize="small"
          {...props}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="flex items-center gap-1">
            {Look(showMenu)}
            
          </div>
        </Button>
        <AnimatePresence>
          {showMenu && (
            <motion.ul
              className={`absolute z-10 bg-coal-2 rounded-lg mt-1 ${menuClassName}`}
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
    <li className="m-1 px-3 py-2 pr-5 bg-coal-2 rounded-lg hover:bg-accent-1 cursor-pointer text-mallow-1 font-bold flex items-center gap-2 transition duration-100">
      {Icon}
      {children}
    </li>
  );
};

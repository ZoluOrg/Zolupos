import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "./Spinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Color?: keyof typeof SolidColorSelection;
  Size?: keyof typeof SizeSelection;
  Icon?: ReactNode;
  IsLoading?: boolean;
  Subtle?: boolean;
}

const SolidColorSelection = {
  primary:
    "bg-primary-base hover:bg-primary-dark hover: active:bg-primary-darker",
  secondary:
    "bg-secondary-base hover:bg-secondary-dark active:bg-secondary-darker",
};

const SubtleColorSelection = {
  primary: "bg-none hover:bg-primary-base active:bg-primary-dark",
  secondary:
    "bg-none hover:bg-secondary-base active:bg-secondary-dark text-black hover:bg-opacity-50 active:bg-opacity-50",
};

const SizeSelection = {
  base: "px-4 py-1.5",
  small: "px-2 py-0.5 text-sm",
};

export const Button: React.FC<Props> = ({
  children,
  Color = "primary",
  Size = "base",
  IsLoading,
  className,
  Icon,
  Subtle,
  ...props
}) => {
  return (
    <button
      className={`${!Subtle && SolidColorSelection[Color]}${
        Subtle && SubtleColorSelection[Color]
      } ${SizeSelection[Size]} ${className} rounded text-white
      transition ease-in-out flex items-center justify-center border `}
      disabled={IsLoading}
      {...props}
    >
      <span className={IsLoading ? "opacity-0" : "flex items-center"}>
        {Icon ? <div className="mr-1 flex items-center">{Icon}</div> : null}
        {children}
      </span>
      {IsLoading ? (
        <span className="absolute">
          <Spinner IsDark={false} />
        </span>
      ) : null}
    </button>
  );
};

import React, { ButtonHTMLAttributes, FC } from "react";
import { CustomSpinner } from "./CustomSpinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: keyof typeof buttonColorSelection;
  buttonSize?: keyof typeof buttonSizeSelection;
  isLoading?: boolean;
}

const buttonColorSelection = {
  accent: "bg-accent-1 hover:bg-accent-2 text-mallow-1",
  coal: "bg-coal-1 hover:bg-coal-2 text-mallow-1",
  mallow: "bg-mallow-2 hover:bg-mallow-3 text-black text-opacity-80  border border-mallow-5",
};

const buttonSizeSelection = {
  small: "py-2 px-[8px] text-sm",
  normal: "py-2 px-[18px] text-base",
  large: "py-3 px-[24px] text-lg",
};

export const Button: FC<Props> = ({
  children,
  buttonColor: backgroundColor = "accent",
  buttonSize: buttonSpacing = "normal",
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${buttonColorSelection[backgroundColor]} ${
        buttonSizeSelection[buttonSpacing]
      } ${
        disabled || isLoading ? "cursor-not-allowed" : ""
      } rounded-lg font-bold transition flex items-center justify-center shadow ${className}`}
      {...props}
    >
      <span className={isLoading ? "opacity-0" : ""}>{children}</span>
      {isLoading ? (
        <div className="absolute">
          <CustomSpinner />
        </div>
      ) : null}
    </button>
  );
};

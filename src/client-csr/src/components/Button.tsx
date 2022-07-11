import React, { ButtonHTMLAttributes, FC } from "react";
import { CustomSpinner } from "./CustomSpinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: keyof typeof backgroundSelection;
  buttonSpacing?: keyof typeof spacingSelection;
  isLoading?: boolean;
}

const backgroundSelection = {
  accent: "bg-accent-1 hover:bg-accent-2 text-mallow-1",
  coal: "bg-coal-1 hover:bg-coal-2 text-mallow-1",
  mallow: "border border-mallow-3 bg-mallow-1 hover:bg-mallow-2 text-coal-1",
};

const spacingSelection = {
  xs: "py-1 px-1",
  normal: "py-2 px-4",
};

export const Button: FC<Props> = ({
  children,
  buttonColor: backgroundColor = "accent",
  buttonSpacing = "normal",
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${backgroundSelection[backgroundColor]} ${spacingSelection[buttonSpacing]} ${disabled || isLoading ? "cursor-not-allowed" : ""} rounded-lg font-bold transition flex items-center justify-center ${className}`}
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

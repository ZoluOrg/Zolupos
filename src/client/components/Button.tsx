import React, { ButtonHTMLAttributes, FC } from "react";
import { CustomSpinner } from "./CustomSpinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Color?: keyof typeof ColorSelection;
  Spacing?: keyof typeof SpacingSelection;
  IsLoading?: boolean;
}

const ColorSelection = {
  accent: "bg-accent-1 hover:bg-accent-2 text-mallow-1",
  coal: "bg-coal-1 hover:bg-coal-2 text-mallow-1",
  mallow: "border border-mallow-3 bg-mallow-1 hover:bg-mallow-2 text-coal-1",
};

const SpacingSelection = {
  xs: "py-1 px-1",
  normal: "py-2 px-4",
};

export const Button: FC<Props> = ({
  children,
  Color = "accent",
  Spacing = "normal",
  IsLoading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={`${ColorSelection[Color]} ${SpacingSelection[Spacing]} rounded-lg font-bold transition flex items-center justify-center ${className}`}
      {...props}
    >
      <span className={IsLoading ? "opacity-0" : ""}>{children}</span>
      {IsLoading ? (
        <div className="absolute">
          <CustomSpinner />
        </div>
      ) : null}
    </button>
  );
};

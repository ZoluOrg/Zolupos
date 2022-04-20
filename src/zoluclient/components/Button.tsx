import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Color?: keyof typeof ColorSelection;
  Spacing?: keyof typeof SpacingSelection;
}

const ColorSelection = {
  accent: "bg-accent-1 hover:bg-accent-2 text-mallow-1",
  coal: "bg-coal-1 hover:bg-coal-2 text-mallow-1",
  mallow: "border border-mallow-3 bg-mallow-1 hover:bg-mallow-2 text-coal-1",
};

const SpacingSelection = {
  normal: "py-2 px-4",
};

export const Button: FC<Props> = ({
  children,
  Color = "accent",
  Spacing = "normal",
  className
}) => {
  return (
    <button
      className={`${ColorSelection[Color]} ${SpacingSelection[Spacing]} ${className} rounded-lg font-bold transition `}
    >
      {children}
    </button>
  );
};

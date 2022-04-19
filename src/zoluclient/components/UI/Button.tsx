import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Color?: keyof typeof ColorSelection;
  Padding?: keyof typeof PaddingSelection;
}

const ColorSelection = {
  accent: "bg-accent-1 hover:bg-accent-2 text-white",
  coal: "bg-coal-1 hover:bg-coal-2 text-white",
  mallow: "border border-mallow-3 bg-mallow-1 hover:bg-mallow-2 text-coal-3",
};

const PaddingSelection = {
  normal: "py-2 px-4",
};

export const Button: FC<Props> = ({
  children,
  Color = "accent",
  Padding = "normal",
}) => {
  return (
    <button
      className={`${ColorSelection[Color]} ${PaddingSelection[Padding]} rounded-lg font-bold transition`}
    >
      {children}
    </button>
  );
};

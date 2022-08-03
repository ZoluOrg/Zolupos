import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonColor?: keyof typeof buttonColorSelection;
  buttonSize?: keyof typeof buttonSizeSeletion;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const buttonColorSelection = {
  mallow: "bg-mallow-2 hover:bg-mallow-3 text-black text-opacity-80",
  accent: "bg-accent-1 hover:bg-accent-2 text-mallow-1",
};

const buttonSizeSeletion = {
  small: "py-2 px-[8px] text-sm",
  normal: "py-2 px-[18px] text-base",
  large: "py-3 px-[24px] text-lg",
};

export const Button: React.FC<Props> = ({
  children,
  buttonColor = "accent",
  buttonSize = "normal",
  isLoading = false,
  isDisabled = false,
}) => {
  return (
    <button
      className={`${buttonColorSelection[buttonColor]} ${buttonSizeSeletion[buttonSize]} 
      font-bold rounded-lg transition duration-100`}
    >
      {children}
    </button>
  );
};

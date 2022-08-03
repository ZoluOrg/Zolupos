import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}

export const Input: React.FC<Props> = ({ className, disabled = false, ...props }) => {
  return (
    <input
      className={`py-2 px-[18px] transition duration-100 rounded-lg bg-mallow-2 border border-mallow-5 
      focus:outline-none focus:ring-mallow-5 focus:ring font-bold ${className}`}
      {...props}
    />
  );
};

import React, { InputHTMLAttributes, useEffect, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Size?: keyof typeof SizeSelection;
}

const SizeSelection = {
  base: "px-2.5 py-1.5",
};

export const Input: React.FC<Props> = ({
  Size = "base",
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <input
      className={`${SizeSelection[Size]} border-2  rounded border-slate-300 
		${
      isFocused ? "" : "hover:bg-slate-200"
    } focus:ring-ocean-light focus:outline-none
		transition ease-in-out disabled:bg-slate-300 disabled:hover:cursor-not-allowed ${className}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};

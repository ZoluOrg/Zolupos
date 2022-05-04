import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox : FC<Props> = ({type="checkbox", ...props}) => {
  return (
    <input
      type="checkbox"
      className="rounded-lg bg-mallow-1 text-accent-1 border border-mallow-3 focus:ring-accent-1 focus:ring-offset-1 transition"
      {...props}
    />
  );
};

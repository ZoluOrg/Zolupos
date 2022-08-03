import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`py-2 px-[18px] transition duration-100 rounded-lg bg-mallow-2 border border-mallow-5 
        focus:outline-none focus:ring-1 focus:ring-coal-1 font-bold shadow ${className}`}
        {...props}
        ref={ref}
      />
    );
  }
);

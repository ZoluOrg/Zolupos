import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`border-2 border-mallow-3 py-2 px-4 rounded-lg ${className} 
      placeholder:text-coal-3 font-bold outline-none bg-mallow-1 form-input`}
        {...props}
        ref={ref}
      />
    );
  }
);

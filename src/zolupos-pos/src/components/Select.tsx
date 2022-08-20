import React, { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export const Select: React.FC<Props> = ({ children, ...props }) => {
  return <select className="rounded-lg w-8/12" {...props}>{children}</select>;
};

import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Spinner } from './Spinner';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Color?: keyof typeof ColorSelection;
  Size?: keyof typeof SizeSelection;
  Icon?: ReactNode;
  IsLoading?: boolean;
}

const ColorSelection = {
  primary: "bg-primary-base hover:bg-primary-dark active:bg-primary-darker",
  secondary: "bg-secondary-base hover:bg-secondary-dark active:bg-secondary-darker",
  subtle: "text-ocean-darker hover:bg-ocean-lighter active:bg-ocean-light"
}

const SizeSelection = {
  base: "px-4 py-1.5",
  small: "px-2 py-0.5 text-sm"
}

export const Button: React.FC<Props> = ({
  children,
  Color = "primary",
  Size = "base",
  IsLoading,
  className,
  Icon,
  ...props
}) => {
  return (
    <button
      className={`${ColorSelection[Color]} ${SizeSelection[Size]} ${className} rounded text-white
      transition ease-in-out flex items-center justify-center`}
      disabled={IsLoading}
      {...props}
    >
      <span className={IsLoading ? "opacity-0" : "flex items-center"}>
        {Icon? <div className="mr-1 flex items-center">{Icon}</div> : null}
        {children}
      </span>
      {IsLoading ?
        <span className="absolute">
          <Spinner IsDark={Color=="subtle"? true:false }/>
        </span>
        : null}
    </button>
  )
}
import React, { ButtonHTMLAttributes } from 'react'
import { Spinner } from './Spinner';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Color?: keyof typeof ColorSelection;
  Size?: keyof typeof SizeSelection;
  IsLoading?: boolean;
}

const ColorSelection = {
  primary: "bg-ocean-darker hover:bg-ocean-base active:bg-ocean-dark",
  danger: "bg-berry-darker hover:bg-berry-base active:bg-berry-dark",
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
  ...props
}) => {
  return (
    <button
      className={`${ColorSelection[Color]} ${SizeSelection[Size]} rounded text-white 
      transition ease-in-out flex items-center justify-center`}
      disabled={IsLoading}
      {...props}
    >
      <span className={IsLoading ? "opacity-0" : ""}>
        {children}
      </span>
      {IsLoading ?
        <span className="absolute">
          <Spinner />
        </span>
        : null}
    </button>
  )
}
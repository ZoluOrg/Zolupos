import React, {ButtonHTMLAttributes} from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  Color?: keyof typeof ColorSelection;
  Size?: keyof typeof SizeSelection;
}

const ColorSelection = {
  black: "bg-black hover:bg-white border-opacity-0 border hover:text-black hover:border-opacity-100 border-black",
  blood: "bg-blood-darker hover:bg-blood-base"
}

const SizeSelection = {
  base: "px-8 py-1.5",
  small: "px-4 py-1 text-xs"
}

export const Button: React.FC<Props> = ({
  children,
  Color="blood",
  Size="base",
  ...props
}) => {
  return (
    <button className={`${ColorSelection[Color]} ${SizeSelection[Size]} rounded text-white font-bold transition ease-in-out`} {...props}>{children}</button>
  )
}
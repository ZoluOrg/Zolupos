import React, {ButtonHTMLAttributes} from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  Color?: keyof typeof ColorSelection;
  Size?: keyof typeof SizeCollection;
}

const ColorSelection = {
  coal: "bg-coal-700 hover:bg-coal-600 active:bg-coal-500 text-white",
  ghost: "bg-vanilla-100 bg-opacity-0 hover:bg-opacity-50 active:bg-opacity-100 text-black "
}

const SizeCollection = {
  base: "px-4 py-1.5"
}

export const Button: React.FC<Props> = ({
  children,
  Color="coal",
  Size="base"
}) => {
  return (
    <button className={`${ColorSelection[Color]}, ${SizeCollection[Size]} hover:bg-opacity-50 rounded-sm text-white font-bold`}>{children}</button>
  )
}
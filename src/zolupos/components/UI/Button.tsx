import React, {ButtonHTMLAttributes} from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  Color?: keyof typeof ColorSelection;
  Size?: keyof typeof SizeCollection;
}

const ColorSelection = {
  coal: "bg-coal-700 hover:bg-coal-600 focus:bg-coal-500 text-white"
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
    <button className={`${ColorSelection[Color]}, ${SizeCollection[Size]} rounded-sm text-white font-bold`}>{children}</button>
  )
}
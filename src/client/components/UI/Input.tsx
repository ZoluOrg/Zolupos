import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	Size?: keyof typeof SizeSelection;
}

const SizeSelection = {
	base: "px-2 py-2"
}

export const Input: React.FC<Props> = ({Size="base"}) => {
	return (
		<input className={`${SizeSelection[Size]} bg-vanilla-100 rounded-md border-0 focus:animate-bounce focus:border-2 focus:bg-light transition ease-in-out duration-150`} placeholder="bruh"/>
	)
}

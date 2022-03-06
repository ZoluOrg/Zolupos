import React from 'react'
import { usePosContext } from '../../context/PosContext'

export const Bill = () => {
	let ctx = usePosContext();
	return (
		<div className="bg-bg-light-darker flex-grow border-l">{ctx.punched?.length}</div>
	)
}

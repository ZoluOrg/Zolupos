import React from 'react'
import { usePunchedContext } from '../../context/pos/PunchedContext';


export const Bill = () => {
	let ctx = usePunchedContext();
	return (
		<div className="bg-bg-light-darker flex-grow border-l">{ctx.punched?.length}</div>
	)
}

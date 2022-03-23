import React from 'react'
import { usePosContext } from '../../../context/PosContext'
import { PunchedButton } from './PunchedButton';

export const PuncedList = () => {
	const ctx= usePosContext();
	return (
		<div className="h-full overflow-scroll">{ctx.punched.map((pr,idx) => <PunchedButton pr={pr}/>)}</div>
	)
}

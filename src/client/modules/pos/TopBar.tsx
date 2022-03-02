import React from 'react'
import {BiHome} from "react-icons/bi"
import { Button } from '../../components/UI/Button'
import { CurrentTime } from '../../components/UI/CurrentTime'

export const TopBar = () => {
	return (
		<div className="topbar flex flex-row items-center justify-between px-5 border-b h-14 w-full">
			<Button Color='secondary' Icon={<BiHome/>}>Home</Button>
			<CurrentTime/>
		</div>
	)
}

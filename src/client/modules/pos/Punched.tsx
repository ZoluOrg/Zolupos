import React from 'react'
import { SearchProduct } from './Punched/AddProduct'
import { PuncedList } from './Punched/PunchedList'
import { TopBar } from './Punched/TopBar'

export const Punched = () => {
	return (
		<div className="h-full w-9/12 flex flex-col">
			<TopBar/>
			<SearchProduct/>
			<PuncedList/>
		</div>
	)
}

import React from 'react'
import { SearchProduct } from './Punched/AddProduct'
import { TopBar } from './Punched/TopBar'

export const Punched = () => {
	return (
		<div className="h-full w-9/12 flex flex-col">
			<TopBar/>
			<SearchProduct/>
		</div>
	)
}

import React from 'react'
import { Button } from '../../../components/UI/Button'
import { Input } from '../../../components/UI/Input'

export const SearchProduct = () => {
	return (
		<div className="h-14 border-b px-5 items-center flex gap-1">
			<Input placeholder="Enter Barcode Here To Add" className="w-full"/>
			<Button>Add</Button>
		</div>
	)
}

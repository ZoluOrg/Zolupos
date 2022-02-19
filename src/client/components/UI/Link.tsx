import React from 'react'
import NLink, {LinkProps} from 'next/link'


export const Link:React.FC<LinkProps> = ({children,...props}) => {
  return (
	<div className="no-underline text-ocean-base hover:underline">
		<NLink {...props}>{children}</NLink>
	</div>
  )
}

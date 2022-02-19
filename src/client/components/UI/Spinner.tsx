import React from 'react'

interface Props {
	IsDark?:boolean;
}

export const Spinner:React.FC<Props> = ({IsDark=false}) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-spin">
			<path d="M22.8332 12C23.4776 12 24.0059 11.4763 23.9433 10.835C23.6747 8.08006 22.4594 5.48888 20.4853 3.51472C18.2348 1.26428 15.1826 2.40279e-07 12 0C8.8174 -2.40279e-07 5.76516 1.26428 3.51472 3.51472C1.54056 5.48887 0.325288 8.08005 0.0566505 10.835C-0.00589047 11.4763 0.522397 12 1.16681 12V12C1.81122 12 2.32634 11.4757 2.40392 10.836C2.66282 8.70119 3.62858 6.70109 5.16483 5.16483C6.97763 3.35203 9.43632 2.33361 12 2.33361C14.5637 2.33361 17.0224 3.35203 18.8352 5.16483C20.3714 6.70109 21.3372 8.7012 21.5961 10.836C21.6737 11.4757 22.1888 12 22.8332 12V12Z" 
			fill={IsDark ? "#000000" : "#FFFFFF"} />
		</svg>
	)
}

import React from "react";
import "./../FilterColor.scss";

function FilterColorButton({ setOpen, open }) {
	return (
		<div
			className='filtercolor-button'
			onClick={() => {
				setOpen(!open);
			}}
		>
			<div>Colors</div>
			{open ? (
				<div className='filtercolor-button-svg'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className=''
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M19.5 12h-15'
						/>
					</svg>
				</div>
			) : (
				<div className='filtercolor-button-svg'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-6 h-6'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M12 4.5v15m7.5-7.5h-15'
						/>
					</svg>
				</div>
			)}
		</div>
	);
}

export default FilterColorButton;

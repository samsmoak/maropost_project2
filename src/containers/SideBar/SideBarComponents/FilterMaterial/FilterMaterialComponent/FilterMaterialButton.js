import React from "react";
import "./../FilterMaterial.scss";

function FilterMaterialButton({ setOpen, open }) {
	return (
		<div
			className='filtermaterial-button '
			onClick={() => {
				setOpen(!open);
			}}
		>
			<div>Material</div>
			{open ? (
				<div className='filtermaterial-button-svg'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class=''
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M19.5 12h-15'
						/>
					</svg>
				</div>
			) : (
				<div className='filtermaterial-button-svg'>
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

export default FilterMaterialButton;

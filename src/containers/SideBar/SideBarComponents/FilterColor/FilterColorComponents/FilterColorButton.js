import React from "react";

function FilterColorButton({ setOpen, open }) {
	return (
		<div>
			<button
				className='flex w-full justify-between py-3 '
				onClick={() => {
					setOpen(!open);
				}}
			>
				<div>Colors</div>
				{open ? (
					<div>
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
								d='M19.5 12h-15'
							/>
						</svg>
					</div>
				) : (
					<div>
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
			</button>
		</div>
	);
}

export default FilterColorButton;

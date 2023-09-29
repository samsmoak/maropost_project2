import React from "react";

function RadioItem({ item, k, selectedOption, handleRadioChange, color }) {
	return (
		<div className='flex justify-between'>
			<label
				key={k}
				className={`relative flex cursor-pointer select-none inline-block mr-4 ${
					selectedOption === k ? "text-gray-500" : "text-red-500"
				}`}
			>
				<input
					type='radio'
					name='radioGroup'
					value={k}
					checked={selectedOption === k}
					onChange={() => handleRadioChange(k, item.value)}
					className='hidden'
				/>
				<span
					className={`w-6 h-6 border-2 flex items-center justify-center rounded-full inline-block mr-2 ${
						selectedOption === k ? "bg-gray-300 " : color[k].value
					}`}
				>
					{selectedOption === k && (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6 text-black'
						>
							<path
								fill-rule='evenodd'
								d='M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z'
								clip-rule='evenodd'
							/>
						</svg>
					)}
				</span>
				<div className='text-black text-sm font-light capitalize'>
					{item.value}
				</div>
			</label>
			<div className='text-sm text-gray-500'>({item.count}) </div>
		</div>
	);
}

export default RadioItem;

import React from "react";
import "./../FilterColor.scss";

function RadioItem({ item, k, selectedOption, handleRadioChange, color }) {
	const colorcode = color.find((obj) => obj.name === item.value);
	const colorcodelen = color.find((obj) => obj.code.length > 50);
	// colorcodelencode = colorcodelen.code;

	const elementStyle = {
		backgroundColor: `${
			selectedOption === item.value ? "gray" : colorcode.code
		}`,
		backgroundImage:
			selectedOption !== item.value ? `url(${colorcode.code})` : "none",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "30px",
		width: "30px",
		borderRadius: "50%",
		position: "absolute",
		top: "-5px",
	};
	console.log(colorcode.code.length);
	return (
		<div className='filtercolor-items-item'>
			<label key={item.value} className='filtercolor-items-item-inputcontainer'>
				<div className='filtercolor-items-item-inputcontainer-input'>
					<input
						type='radio'
						name='radioGroup'
						value={item.value}
						checked={selectedOption === item.value}
						onChange={() => handleRadioChange(item.value)}
						// className='hidden'
						style={{ opacity: "0" }}
					/>
					<div style={elementStyle}>
						{selectedOption === item.value && (
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
					</div>
				</div>
				<div className='filtercolor-items-item-inputcontainer-text'>
					{item.value}
				</div>
			</label>
			<div className=''>({item.count}) </div>
		</div>
	);
}

export default RadioItem;

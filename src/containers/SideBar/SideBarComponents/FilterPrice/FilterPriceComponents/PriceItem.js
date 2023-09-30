import React, { useState } from "react";
import "./../FilterPrice.scss";

function PriceItem({ onSliderChange }) {
	const [sliderValue, setSliderValue] = useState(50);

	const handleSliderChange = (event) => {
		const newValue = event.target.value;
		setSliderValue(newValue);
		onSliderChange(newValue);
	};
	return (
		<div
			// className={`w-full mt-4 ${!open && "hidden"}`}
			className='filterprice-item'
		>
			<form>
				<div className='filterprice-item-inputcontainer'>
					<input
						id='small-range'
						type='range'
						className='range-slider'
						min='35'
						max='350'
						value={sliderValue}
						onChange={handleSliderChange}
					/>
				</div>

				<div className='filterprice-item-textcontainer'>
					<div className='filterprice-item-textrange'>
						<div
							className=''
							style={{
								marginRight: "10px",
								border: "1px solid #939393",
								padding: "5px 20px",
								display: "flex",
								alignItems: "center",
							}}
						>
							$35
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							style={{ marginRight: "10px", width: "20px" }}
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M19.5 12h-15'
							/>
						</svg>

						<div
							className=''
							style={{
								marginRight: "10px",
								border: "1px solid #939393",
								padding: "5px 20px",
								display: "flex",
								alignItems: "center",
							}}
						>
							$350
						</div>
					</div>
					<div
						className='filterprice-item-button'
						// onClick={(e) => handleFormSubmit(e)}
					>
						go
					</div>
				</div>
			</form>
		</div>
	);
}

export default PriceItem;

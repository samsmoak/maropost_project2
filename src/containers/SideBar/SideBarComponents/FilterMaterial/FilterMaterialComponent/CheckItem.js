import React, { useState } from "react";
import "./../FilterMaterial.scss";

function CheckItem({
	product,
	key,
	selectedMaterialOptions,
	handleCheckboxChange,
}) {
	const [isConditionMet, setIsConditionMet] = useState(false);
	const [borderColor, setBorderColor] = useState(
		isConditionMet ? "black" : "gray"
	);
	const elementStyle = {
		border: `${
			selectedMaterialOptions?.includes(product.value) ? "1px" : "1px"
		} solid ${
			selectedMaterialOptions?.includes(product.value) ? "white" : "#cccccc"
		}`,
	};
	return (
		<div className='filtermaterial-items-item' key={key}>
			<div className='filtermaterial-items-item-inputarea'>
				<label style={elementStyle} className='checkbox-container'>
					<input
						type='checkbox'
						id='myCheckbox'
						value={product.value}
						checked={selectedMaterialOptions?.includes(product.value)}
						onChange={() => handleCheckboxChange(product.value)}
						className='styled-checkbox'
					/>
					{selectedMaterialOptions?.includes(product.value) && (
						<span class='checkmark'></span>
					)}

					<div className='checkbox-name'>
						<div>{product.value}</div>
					</div>
				</label>
			</div>

			<div className=''>({product.count})</div>
		</div>
	);
}

export default CheckItem;

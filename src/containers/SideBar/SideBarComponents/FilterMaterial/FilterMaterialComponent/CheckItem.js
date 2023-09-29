import React from "react";

function CheckItem({
	product,
	key,
	selectedMaterialOptions,
	handleCheckboxChange,
}) {
	return (
		<div className='' key={key}>
			<div className=''>
				<div>
					<input
						type='checkbox'
						id='myCheckbox'
						value={product.value}
						checked={selectedMaterialOptions?.includes(product.value)}
						onChange={() => handleCheckboxChange(product.value)}
						className=''
					/>
				</div>
				<div>
					<label htmlFor='myCheckbox' className=''>
						{product.value}
					</label>
				</div>
			</div>

			<div className=''>({product.count})</div>
		</div>
	);
}

export default CheckItem;

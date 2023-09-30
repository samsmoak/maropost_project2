import React from "react";
import "./../FilterMaterial.scss";

function MoreButton({ handleLoadMore }) {
	return (
		<div onClick={handleLoadMore} className='filtermaterial-items-button'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='50'
				height='50'
				viewBox='0 0 50 50'
				className='filtermaterial-items-button-svg'
			>
				<rect x='10' y='23' width='30' height='4' fill='black' />
				<rect x='23' y='10' width='4' height='30' fill='black' />
			</svg>

			<div>More</div>
		</div>
	);
}

export default MoreButton;

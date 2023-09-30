import React from "react";

function ProductCardSticker({ oldprice, newprice }) {
	const reduction =
		oldprice !== null
			? Math.ceil(((oldprice - newprice) / oldprice) * 100)
			: "";
	return (
		<div className=''>
			<div className='productcard-percentsticker'>
				<svg
					width='103'
					height='30'
					viewBox='0 0 103 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='productcard-percentsticker-svg'
				>
					<path d='M0 0H90.3794L103 15L90.3794 30H0V0Z' fill='#82B8D9' />
				</svg>
				<div className='productcard-percentsticker-text'>
					{reduction ? reduction + "% off" : ""}
				</div>
			</div>
		</div>
	);
}

export default ProductCardSticker;

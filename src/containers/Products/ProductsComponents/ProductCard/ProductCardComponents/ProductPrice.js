import React from "react";
import "./../ProductCard.scss";

function ProductPrice({ oldprice, newprice }) {
	return (
		<div className='productcard-textarea-price'>
			<div className='productcard-textarea-price-old'>
				{`${oldprice !== null ? "$ " + oldprice.toString() : " "}`}
			</div>
			<div className='productcard-textarea-price-new'>$ {newprice}</div>
		</div>
	);
}

export default ProductPrice;

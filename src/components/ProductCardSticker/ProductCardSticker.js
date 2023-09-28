import React from "react";
import "./ProductCardSticker.scss";
import PercentArrowArrow from "./PercentArrow.js";

function ProductCardSticker() {
	return (
		<div className='productcardsticker'>
			<div className='productcardsticker-container'>
				{/* <div className='productcardsticker-percent'>14% off</div> */}
				<PercentArrowArrow />
				<div className='productcardSticker-sale'>sale</div>
			</div>
		</div>
	);
}

export default ProductCardSticker;

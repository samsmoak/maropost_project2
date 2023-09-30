import React from "react";
import "../ProductCard.scss";

function ProductCardImage({ src, alt }) {
	return <img src={src} alt={alt} className='productcard-image' />;
}

export default ProductCardImage;

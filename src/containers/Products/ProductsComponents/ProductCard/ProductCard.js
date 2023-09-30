import React from "react";
import ProductCardImage from "./ProductCardComponents/ProductCardImage";
import ProductCardSticker from "./ProductCardComponents/ProductCardSticker";
import "./ProductCard.scss";

function ProductCard({ product }) {
	const redirectToLink = (url) => {
		window.location.href = url;
	};
	return (
		<div
			onClick={() => redirectToLink(product.product_url)}
			className='productcard'
		>
			<div className='productcard-imagecontainer'>
				<ProductCardImage src={product.image_url} alt='' />
				<div className='productcard-stickercontainer'>
					<ProductCardSticker />
					<div>sales</div>
				</div>
			</div>
			<div>
				<div>{product.title}</div>
				<div>
					<div>
						{`${product.compare_at !== null ? "$ " : " "}`}
						{product.compare_at}
					</div>
					<div>$ {product.price}</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;

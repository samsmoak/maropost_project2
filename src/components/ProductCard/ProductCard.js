import React from "react";
import ProductCardSticker from "../ProductCardSticker/ProductCardSticker";
import ProductCardImage from "./ProductCardImage/ProductCardImage";

function ProductCard({ product }) {
	const redirectToLink = (url) => {
		window.location.href = url;
	};
	return (
		<div onClick={() => redirectToLink(product.product_url)}>
			<div>
				<div>
					<ProductCardImage src={product.image_url} alt='' />
					{<div>images sticker</div>}
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
		</div>
	);
}

export default ProductCard;

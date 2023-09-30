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
				{product.compare_at && (
					<div className='productcard-stickercontainer'>
						<ProductCardSticker
							oldprice={product.compare_at}
							newprice={product.price}
						/>
						<div className='productcard-textsticker'>sales</div>
					</div>
				)}
			</div>
			<div className='productcard-textarea'>
				<div className='productcard-textarea-title'>{product.title}</div>
				<div className='productcard-textarea-price'>
					<div className='productcard-textarea-price-old'>
						{`${
							product.compare_at !== null
								? "$ " + product.compare_at.toString()
								: " "
						}`}
					</div>
					<div className='productcard-textarea-price-new'>
						$ {product.price}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;

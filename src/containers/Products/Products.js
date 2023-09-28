import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.scss";

function Products({ products }) {
	return (
		<div className='product'>
			<div className='product-container'>
				{products.map((product, key) => (
					<ProductCard product={product} key={key} />
				))}
			</div>
		</div>
	);
}

export default Products;

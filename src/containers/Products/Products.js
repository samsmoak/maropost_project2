import React from "react";
import ProductCard from "./ProductsComponents/ProductCard/ProductCard";
import "./Products.scss";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

function Products({ products }) {
	return (
		<div className='products'>
			{/* <div className='products-breadcrumbs'>
				<BreadCrumbs />
			</div> */}

			<div className='products-container'>
				{products.map((product, key) => (
					<ProductCard product={product} key={key} />
				))}
			</div>
		</div>
	);
}

export default Products;

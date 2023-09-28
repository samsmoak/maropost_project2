import React, { useEffect, useState } from "react";
import axios from "axios";

import Products from "../../containers/Products/Products";
import SideBar from "../../containers/SideBar/SideBar";
import "./ResultPage.scss";
import "../../containers/Products/Products.scss";
const fetchData = async (
	apiUrl,
	setProducts,
	setFilter,
	setIsLoading,
	setError
) => {
	try {
		const response = await axios.get(apiUrl);
		setProducts(response.data.items);
		setFilter(response.data.facets);
		setIsLoading(false);
	} catch (err) {
		setError(err);
		setIsLoading(false);
	}
};
function ResultPage() {
	const [products, setProducts] = useState([]);
	const [filter, setFilter] = useState([]);
	const [isLoading, setIsLoading] = useState();
	const [error, setError] = useState("");
	const apiUrl =
		"https://findify-assets.s3.amazonaws.com/test-task/test_response.json";
	useEffect(() => {
		fetchData(apiUrl, setProducts, setFilter, setIsLoading, setError);
	}, [apiUrl]);
	return (
		<div className='resultpage'>
			<SideBar filter={filter} />
			<div className='products'>
				<Products products={products} />
			</div>
		</div>
	);
}

export default ResultPage;

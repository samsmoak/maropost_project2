import React, { useEffect, useState } from "react";
import axios from "axios";

import Products from "../../containers/Products/Products";
import SideBar from "../../containers/SideBar/SideBar";
import "./ResultPage.scss";
import "../../containers/Products/Products.scss";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
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

	const [selectedMaterialOptions, setSelectedMaterialOptions] = useState([]);
	const [selectedColorOption, setSelectedColorOption] = useState(null);
	const [sliderValue, setSliderValue] = useState(50);
	const handleMaterialSelectedOptionsChange = (newSelectedOptions) => {
		setSelectedMaterialOptions(newSelectedOptions);
	};
	const handleColorSelectedOptionChange = (newSelectedOption2) => {
		setSelectedColorOption(newSelectedOption2);
		// console.log(selectedColorOption);
	};
	const handleSliderChange = (newValue) => {
		setSliderValue(newValue);
	};
	const handleSelectedMaterialClick = (optionValue) => {
		// When a selected option is clicked, uncheck the corresponding checkbox
		setSelectedMaterialOptions(
			selectedMaterialOptions.filter((value) => value !== optionValue)
		);
	};
	const handleSelectedColorClick = () => {
		// When a selected option is clicked, unselect it (set to null)
		setSelectedColorOption(null);
	};
	const handleRangeClick = () => {
		// Reset the input range value to the initial value
		setSliderValue(null);
	};

	return (
		<div className='resultpage'>
			<SideBar
				filter={filter}
				selectedColorOption={selectedColorOption}
				handleColorSelectedOptionChange={handleColorSelectedOptionChange}
				handleMaterialSelectedOptionsChange={
					handleMaterialSelectedOptionsChange
				}
				selectedMaterialOptions={selectedMaterialOptions}
				sliderValue={sliderValue}
				handleRangeClick={handleRangeClick}
				handleSelectedColorClick={handleSelectedColorClick}
				handleSelectedMaterialClick={handleSelectedMaterialClick}
				handleSliderChange={handleSliderChange}
			/>
			<div className=''>
				<div className='resultpage-breadcrumbs'>
					<BreadCrumbs
						selectedMaterialOptions={selectedMaterialOptions}
						selectedColorOption={selectedColorOption}
						handleColorSelectedOptionChange={handleColorSelectedOptionChange}
						handleMaterialSelectedOptionsChange={
							handleMaterialSelectedOptionsChange
						}
						handleRangeClick={handleRangeClick}
						// handleSliderChange={handleSliderChange}
						sliderValue={sliderValue}
						handleSelectedMaterialClick={handleSelectedMaterialClick}
						handleSelectedColorClick={handleSelectedColorClick}
					/>
				</div>
				<div className='products'>
					<Products products={products} />
				</div>
			</div>
		</div>
	);
}

export default ResultPage;

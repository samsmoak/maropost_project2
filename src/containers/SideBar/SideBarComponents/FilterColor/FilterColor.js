import axios from "axios";
import React, { useEffect, useState } from "react";
import MoreButton from "../FilterMaterial/FilterMaterialComponent/MoreButton";
import LessButton from "../FilterMaterial/FilterMaterialComponent/LessButton";
import "./FilterColor.scss";
import RadioItem from "./FilterColorComponents/RadioItem";
import FilterColorButton from "./FilterColorComponents/FilterColorButton";
const fetchData = async (apiUrl, setColor, setIsLoading, setError) => {
	try {
		const response = await axios.get(apiUrl);
		setColor(response.data);
		setIsLoading(false);
	} catch (err) {
		setError(err);
		setIsLoading(false);
	}
};

function FilterColor({
	filter,
	selectedColorOption,
	handleColorSelectedOptionChange,
	handleSliderChange,
}) {
	const [open, setOpen] = useState(false);
	const [displayedValues, setDisplayedValues] = useState([]);
	const [startIndex, setStartIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const [isLoading, setIsLoading] = useState();
	const [error, setError] = useState("");
	const [color, setColor] = useState();
	const [selectedColor, setSelectedColor] = useState("");
	const apiUrl =
		"https://findify-assets.s3.amazonaws.com/test-task/test_color_mapping.json";
	const itemsPerPage = 6;
	const endOfList = startIndex + itemsPerPage >= filter[1]?.values.length;
	// console.log(color);
	useEffect(() => {
		fetchData(apiUrl, setColor, setIsLoading, setError);
	}, [apiUrl]);

	useEffect(() => {
		// Update the displayed values when facetsData changes
		if (filter.length > 0) {
			const nextValues = filter[1]?.values.slice(
				startIndex,
				startIndex + itemsPerPage
			);
			setDisplayedValues((prevValues) => [...prevValues, ...nextValues]);
		}
	}, [filter, startIndex]);

	const handleLoadMore = () => {
		// Increment the startIndex by itemsPerPage to load more elements
		setStartIndex(startIndex + itemsPerPage);
	};
	const handleLoadLess = () => {
		// Set the startIndex back to 0 to load the first six elements
		setDisplayedValues([]);
		setStartIndex(0);
	};

	const handleRadioChange = (colorname, colorcode) => {
		// console.log(colorname, colorcode);
		if (selectedOption !== colorname) {
			setSelectedOption(colorname);
		} else {
			setSelectedOption(""); // Unselect the radio button if it's already selected
		}
		handleColorSelectedOptionChange(colorcode);
	};
	const elementStyle = {
		display: `${open ? "block" : "none"}`,
	};

	return (
		<div className='filtercolor'>
			<FilterColorButton setOpen={setOpen} open={open} />

			<div className='filter-items' style={elementStyle}>
				{displayedValues.map((item, k) => (
					<RadioItem
						item={item}
						k={k}
						handleRadioChange={handleRadioChange}
						selectedOption={selectedOption}
						color={color}
					/>
				))}
				<div className='filtercolor-items-buttons'>
					{endOfList && startIndex > 0 && (
						<LessButton handleLoadLess={handleLoadLess} />
					)}
					{filter.length > 0 &&
						startIndex + itemsPerPage < filter[1]?.values.length && (
							<MoreButton handleLoadMore={handleLoadMore} />
						)}
				</div>
			</div>
		</div>
	);
}

export default FilterColor;

import React, { useEffect, useState } from "react";
import CheckItem from "./FilterMaterialComponent/CheckItem";
import MoreButton from "./FilterMaterialComponent/MoreButton";
import LessButton from "./FilterMaterialComponent/LessButton";
import FilterMaterialButton from "./FilterMaterialComponent/FilterMaterialButton";

function FilterMaterial({
	filter,
	selectedMaterialOptions,
	handleMaterialSelectedOptionsChange,
}) {
	const [open, setOpen] = useState(false);
	const [displayedValues, setDisplayedValues] = useState([]);
	const [startIndex, setStartIndex] = useState(0);
	const itemsPerPage = 6;
	const endOfList = startIndex + itemsPerPage >= filter[0]?.values.length;
	// console.log(filter);

	useEffect(() => {
		// Update the displayed values when data changes
		if (filter.length > 0) {
			const nextValues = filter[0].values.slice(
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

	const handleCheckboxChange = (option) => {
		if (selectedMaterialOptions.includes(option)) {
			// If the option is already selected, remove it from the array
			const newSelectedOptions = selectedMaterialOptions.filter(
				(item) => item !== option
			);
			handleMaterialSelectedOptionsChange(newSelectedOptions);
		} else {
			// If the option is not selected, add it to the array
			const newSelectedOptions = [...selectedMaterialOptions, option];
			handleMaterialSelectedOptionsChange(newSelectedOptions);
		}
	};

	return (
		<div>
			<FilterMaterialButton setOpen={setOpen} open={open} />
			<div>
				{displayedValues.map((product, key) => (
					<CheckItem
						product={product}
						key={key}
						selectedMaterialOptions={selectedMaterialOptions}
						handleCheckboxChange={handleCheckboxChange}
					/>
				))}
				<div className=''>
					{endOfList && startIndex > 0 && (
						<LessButton handleLoadLess={handleLoadLess} />
					)}
					{filter.length > 0 &&
						startIndex + itemsPerPage < filter[0].values.length && (
							<MoreButton handleLoadMore={handleLoadMore} />
						)}
				</div>
			</div>
		</div>
	);
}

export default FilterMaterial;

import React, { useState } from "react";
import "./SideBar.scss";
import FilterMaterial from "./SideBarComponents/FilterMaterial/FilterMaterial";
import FilterColor from "./SideBarComponents/FilterColor/FilterColor";
import FilterPrice from "./SideBarComponents/FilterPrice/FilterPrice";

function SideBar({ filter }) {
	const [selectedMaterialOptions, setSelectedMaterialOptions] = useState([]);
	const [selectedColorOption, setSelectedColorOption] = useState(null);
	const handleMaterialSelectedOptionsChange = (newSelectedOptions) => {
		setSelectedMaterialOptions(newSelectedOptions);
	};
	const handleColorSelectedOptionChange = (newSelectedOption2) => {
		setSelectedColorOption(newSelectedOption2);
		console.log(selectedColorOption);
	};
	return (
		<div className='sidebar'>
			<FilterMaterial
				filter={filter}
				selectedMaterialOptions={selectedMaterialOptions}
				handleMaterialSelectedOptionsChange={
					handleMaterialSelectedOptionsChange
				}
			/>
			<FilterColor
				filter={filter}
				selectedColorOption={selectedColorOption}
				handleColorSelectedOptionChange={handleColorSelectedOptionChange}
			/>

			<FilterPrice filter={filter} />
		</div>
	);
}

export default SideBar;

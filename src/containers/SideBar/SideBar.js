import React, { useState } from "react";
import "./SideBar.scss";
import FilterMaterial from "./SideBarComponents/FilterMaterial/FilterMaterial";
import FilterColor from "./SideBarComponents/FilterColor/FilterColor";
import FilterPrice from "./SideBarComponents/FilterPrice/FilterPrice";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

function SideBar({
	filter,
	selectedColorOption,
	handleColorSelectedOptionChange,
	handleMaterialSelectedOptionsChange,
	selectedMaterialOptions,
	sliderValue,
	handleRangeClick,
	handleSelectedColorClick,
	handleSelectedMaterialClick,
	handleSliderChange,
}) {
	return (
		<div className='sidebar'>
			<div className='sidebar-title'>filter</div>
			<div className='sidebar-material'>
				<FilterMaterial
					filter={filter}
					selectedMaterialOptions={selectedMaterialOptions}
					handleMaterialSelectedOptionsChange={
						handleMaterialSelectedOptionsChange
					}
				/>
			</div>
			<div className='sidebar-color'>
				<FilterColor
					filter={filter}
					selectedColorOption={selectedColorOption}
					handleColorSelectedOptionChange={handleColorSelectedOptionChange}
				/>
			</div>

			<div className='sidebar-price'>
				<FilterPrice filter={filter} onSliderChange={handleSliderChange} />
			</div>
			{/* <div className='sidebar-breadcrumbs'>
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
			</div> */}
		</div>
	);
}

export default SideBar;

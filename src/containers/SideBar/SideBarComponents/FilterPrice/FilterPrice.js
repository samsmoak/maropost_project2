import React, { useState } from "react";
import FilterPriceButton from "./FilterPriceComponents/FilterPriceButton";
import "./FilterPrice.scss";
import PriceItem from "./FilterPriceComponents/PriceItem";

function FilterPrize({ onSliderChange }) {
	const [open, setOpen] = useState(false);

	const elementStyle = {
		display: `${open ? "block" : "none"}`,
	};

	return (
		<div className='filterprice'>
			<FilterPriceButton setOpen={setOpen} open={open} />
			<div className='' style={elementStyle}>
				<PriceItem onSliderChange={onSliderChange} />
			</div>
		</div>
	);
}

export default FilterPrize;

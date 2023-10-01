import React from "react";
import "./BreadCrumbs.scss";
import ObliqueSvg from "./Breadcrumbcomponents/ObliqueSvg";

function BreadCrumbs({
	selectedMaterialOptions,
	selectedColorOption,
	handleSelectedMaterialClick,
	handleSelectedColorClick,
	handleRangeClick,
	sliderValue,
}) {
	const elementStyle = {
		backgroundColor: `${selectedColorOption ? selectedColorOption : "none"}`,
		backgroundImage: selectedColorOption
			? `url(${selectedColorOption})`
			: "none",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "18px",
		width: "18px",
		borderRadius: "50%",
	};

	return (
		<div className='breadcrumbs'>
			{selectedColorOption && (
				<div className='breadcrumbs-color'>
					<div style={elementStyle}></div>
					<div className='breadcrumbs-color-svg'>
						{selectedColorOption !== null ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='w-4 h-4 cursor-pointer'
								onClick={handleSelectedColorClick}
							>
								<path
									fill-rule='evenodd'
									d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
									clip-rule='evenodd'
								/>
							</svg>
						) : (
							" "
						)}
					</div>
					<ObliqueSvg />
					{/* <div className='breadcrumbs-color-linethrough'></div> */}
				</div>
			)}

			{sliderValue && (
				<div className='breadcrumbs-price'>
					<div>{`${
						sliderValue !== null ? "$30 - $ " + sliderValue.toString() : " "
					}`}</div>
					<div className='breadcrumbs-price-svg'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-4 h-4 cursor-pointer'
							onClick={handleRangeClick}
						>
							<path
								fill-rule='evenodd'
								d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
								clip-rule='evenodd'
							/>
						</svg>
					</div>
					<ObliqueSvg />
					{/* <div className='linethrough'></div> */}
				</div>
			)}
			{/* {sliderValue && <ObliqueSvg />} */}
			<div className='breadcrumbs-titles'>
				{selectedMaterialOptions?.map((i, v) => {
					return (
						<div
							className='breadcrumbs-titles-title'
							onClick={() => handleSelectedMaterialClick(i)}
						>
							<div>{i} </div>
							<div className='breadcrumbs-titles-title-svg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-4 h-4'
								>
									<path
										fill-rule='evenodd'
										d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
										clip-rule='evenodd'
									/>
								</svg>
							</div>
							<ObliqueSvg />
							{/* <div className='linethrough'></div> */}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default BreadCrumbs;

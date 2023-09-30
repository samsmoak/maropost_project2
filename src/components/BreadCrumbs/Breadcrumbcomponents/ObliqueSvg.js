import React from "react";
import "./../BreadCrumbs.scss";

function ObliqueSvg() {
	return (
		<div className='breadcrumbs-obliquesvg'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				// width='50'
				// height='50'
				viewBox='0 0 50 50'
			>
				<line x1='50' y1='0' x2='0' y2='50' stroke='black' stroke-width='2' />
			</svg>
		</div>
	);
}

export default ObliqueSvg;

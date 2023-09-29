import React from "react";

function LessButton({ handleLoadLess }) {
	return (
		<button className='' onClick={handleLoadLess}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				class='w-4 h-4'
			>
				<path
					fill-rule='evenodd'
					d='M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z'
					clip-rule='evenodd'
				/>
			</svg>
			Less
		</button>
	);
}

export default LessButton;
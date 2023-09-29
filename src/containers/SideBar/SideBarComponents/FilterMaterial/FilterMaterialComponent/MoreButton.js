import React from "react";

function MoreButton({ handleLoadMore }) {
	return (
		<button
			onClick={handleLoadMore}
			className='font-normal w-full text-sm flex justify-center items-center'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				class='w-4 h-4'
			>
				<path
					fill-rule='evenodd'
					d='M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z'
					clip-rule='evenodd'
				/>
			</svg>
			More
		</button>
	);
}

export default MoreButton;

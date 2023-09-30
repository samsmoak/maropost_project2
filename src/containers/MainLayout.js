import React from "react";
import Routess from "../Routess";
import { BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
function MainLayout() {
	const location = useLocation();
	return (
		<div className=''>
			<Navbar />
			<div className=''>
				<Routess />
			</div>
		</div>
	);
}

export default MainLayout;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./containers/MainLayout";

function App() {
	return (
		<div>
			<BrowserRouter>
				<MainLayout />
			</BrowserRouter>
		</div>
	);
}

export default App;

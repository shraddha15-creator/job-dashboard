import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { JobsProvider } from "./context/job-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<JobsProvider>
				<App />
			</JobsProvider>
		</BrowserRouter>
	</React.StrictMode>
);

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;

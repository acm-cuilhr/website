import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contributors from "./pages/Contributors";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			{/* NAVIGATION BAR */}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/contributors" element={<Contributors />} />
				<Route path="/team" element={<Team />} />
			</Routes>
		</>
	);
}

export default App;

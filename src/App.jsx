import { Route, Routes } from "react-router-dom";
import EventDetails from "./components/EventDetails";
import Navbar from "./components/Navbar";
import Contributors from "./pages/Contributors";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Team from "./pages/Team";

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
				<Route path="/events/details" element={<EventDetails />} />
			</Routes>
		</>
	);
}

export default App;

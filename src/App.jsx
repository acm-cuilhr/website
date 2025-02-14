import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contributors from "./pages/Contributors";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Team from "./pages/Team";
import EventDetails from "./components/EventDetails";

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

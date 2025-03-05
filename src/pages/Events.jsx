import HeaderSection from "../components/EventHeader";
import EventsGrid from "../components/EventsGrid";
import FooterSection from "../components/FooterSection";

export default function Events() {
	return (
		<div className={`bg-[url("/assets/GallerybgImg.png")] bg-center`}>
			<HeaderSection />
			<EventsGrid />
			<FooterSection />
		</div>
	);
}

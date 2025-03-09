import CommunitySection from "../components/CommunitySection";
import ContactFormSection from "../components/ContactFormSection";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import SliderSection from "../components/SliderSection";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
	const SliderData = [
		{
			id: 0,
			eventName: "Students Week",
			description:
				"Student Week is an exciting time at ACM-CUI Lahore, packed with diverse competitions that bring together students from various disciplines. It’s a chance for students to showcase their skills, compete, and have fun while engaging with technology and creativity.",
			eventImage: "/assets/events/ScavengerHunt.jpeg",
		},
		{
			id: 1,
			eventName: "Coding Competition",
			description:
				"ACM’s Coding Competitions are designed to challenge and inspire programmers of all levels. Whether you are a beginner or an experienced coder, these contests provide an opportunity to sharpen your problem-solving skills and compete against fellow tech enthusiasts.",
			eventImage: "/assets/events/Webathon1.jpeg",
		},
		{
			id: 2,
			eventName: "Hackathons",
			description:
				"Hackathons are the ultimate test of creativity, innovation, and coding skills. ACM-CUI Lahore organizes hackathons where students come together to develop innovative solutions for real-world challenges within a limited time frame.",
			eventImage: "/assets/events/CodingSpree.jpeg",
		},
	];

	const TestimonialData = [
		{
			id: 0,
			profileURL: "/assets/testimonials/1.jpg",
			name: "Muhammad Zahoor Anwar",
			profession: "Founding Member & Former President",
			remarks:
				"As a founding member, I planted the seeds of innovation. Now, it's your turn to nurture those seeds and grow. Join the ACM community.",
		},
		{
			id: 1,
			profileURL: "/assets/testimonials/2.jpg",
			name: "Muhammad Awais Akhtar",
			profession: "Former President",
			remarks:
				"Whether you're at the front or in the background, your presence in ACM matters. Make sure it’s better because you were here!",
		},
		{
			id: 2,
			profileURL: "/assets/testimonials/3.jpg",
			name: "Murtaza",
			profession: "Former President",
			remarks:
				"The best way to predict the future is to create it. Keep exploring, keep experimenting, and make your mark in technology",
		},
	];

	const GalleryData = [
		{
			id: 0,
			cardType: "double",
			cardImg: "/assets/events/Fifa.jpeg",
			ImgDescriptionStats: "1000's",
			ImgDescription: "house participants",
			isReversed: false,
		},
		{ id: 1, cardType: "single", cardImg: "/assets/events/Orientation.jpeg" },
		{
			id: 2,
			cardType: "double",
			cardImg: "/assets/events/Chess.jpeg",
			ImgDescriptionStats: "100's",
			ImgDescription: "developers building during hackathons",
			isReversed: true,
		},
		{ id: 3, cardType: "single", cardImg: "/assets/events/ACMCore.jpeg" },
	];

	return (
		<>
			{/* HERO SECTION */}
			<HeroSection />

			{/* SLIDER SECTION */}
			<SliderSection SliderData={SliderData} />

			{/* COMMUNITY STATS & WHY JOIN ACM SECTION */}
			<CommunitySection />

			{/* TESTIMONIALS SECTION */}
			<TestimonialSection TestimonialData={TestimonialData} />

			{/* GALLARY SECTION */}
			<GallerySection GalleryData={GalleryData} />

			{/* CONTACT FORM SECTION */}
			<ContactFormSection />
		</>
	);
}

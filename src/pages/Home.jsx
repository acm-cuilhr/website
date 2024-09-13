import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import SliderSection from '../components/SliderSection';
import TestimonialSection from '../components/TestimonialSection';
import CommunitySection from '../components/CommunitySection';
import GallerySection from '../components/GallerySection';
import ContactFormSection from '../components/ContactFormSection';
import FooterSection from '../components/FooterSection';


export default function Home() {

	const SliderData = [
		{ id: 0, eventName: 'Students Week', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', eventImage: './assets/eventsImg.png' },
		{ id: 1, eventName: 'Coding Competition', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', eventImage: './assets/eventsImg.png' },
		{ id: 2, eventName: 'Hackathons', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', eventImage: './assets/eventsImg.png' },
	]

	const TestimonialData = [
		{ id: 0, profileURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww', name: 'Marcus W.', profession: 'Developer', remarks: "I couldn't be any happier. Highly recommneded!" },
		{ id: 1, profileURL: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww', name: 'Jessy K.', profession: 'Front-End Developer', remarks: "Great service and custom service! Perfect!" },
		{ id: 2, profileURL: 'https://media.istockphoto.com/id/2004891062/photo/happy-mid-aged-business-woman-manager-handshaking-greeting-client-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=vERE_avkACCKj3dCQBvd0Ywjx_VWqMEYR887kJ5HPT0=', name: 'Marina J.', profession: 'HR Officer', remarks: "Perfect. Just perfect! I can't say anything." },
	]

	const GalleryData = [
		{ cardType: 'double', cardImg: './assets/GalleryImg1.png', ImgDescriptionStats: "1000's", ImgDescription: 'house participants', isReversed: false },
		{ cardType: 'single', cardImg: './assets/GalleryImg2.png' },
		{ cardType: 'double', cardImg: './assets/GalleryImg3.png', ImgDescriptionStats: "100's", ImgDescription: 'developers building during hackathons', isReversed: true },
		{ cardType: 'single', cardImg: './assets/GalleryImg4.png' },
	];

	return (
		<>
			{/* NAVIGATION BAR */}
			<Navbar />

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

			{/* FOOTER SECTION */}
			<FooterSection />

		</>
	)
}


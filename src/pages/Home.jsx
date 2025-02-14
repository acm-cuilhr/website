import React from 'react'
import HeroSection from '../components/HeroSection';
import SliderSection from '../components/SliderSection';
import TestimonialSection from '../components/TestimonialSection';
import CommunitySection from '../components/CommunitySection';
import GallerySection from '../components/GallerySection';
import ContactFormSection from '../components/ContactFormSection';
import FooterSection from '../components/FooterSection';


export default function Home() {

	const SliderData = [
		{ id: 0, eventName: 'Students Week', description: 'Student Week is an exciting time at ACM-CUI Lahore, packed with diverse competitions that bring together students from various disciplines. It’s a chance for students to showcase their skills, compete, and have fun while engaging with technology and creativity.', eventImage: '/assets/eventsImg.png' },
		{ id: 1, eventName: 'Coding Competition', description: 'ACM’s Coding Competitions are designed to challenge and inspire programmers of all levels. Whether you are a beginner or an experienced coder, these contests provide an opportunity to sharpen your problem-solving skills and compete against fellow tech enthusiasts.', eventImage: '/assets/eventsImg.png' },
		{ id: 2, eventName: 'Hackathons', description: 'Hackathons are the ultimate test of creativity, innovation, and coding skills. ACM-CUI Lahore organizes hackathons where students come together to develop innovative solutions for real-world challenges within a limited time frame.', eventImage: '/assets/eventsImg.png' },
	]

	const TestimonialData = [
		{ id: 0, profileURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww', name: 'Marcus W.', profession: 'Former President', remarks: "Your journey in tech isn’t just about writing code; it’s about solving real-world problems. Stay curious, keep building" },
		{ id: 1, profileURL: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww', name: 'Jessy K.', profession: 'Former Vice President', remarks: "ACM isn’t just an organization; it’s a launchpad. The skills, the network, the experiences—everything shapes you for success" },
		{ id: 2, profileURL: 'https://media.istockphoto.com/id/2004891062/photo/happy-mid-aged-business-woman-manager-handshaking-greeting-client-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=vERE_avkACCKj3dCQBvd0Ywjx_VWqMEYR887kJ5HPT0=', name: 'Marina J.', profession: 'Former General Secretary', remarks: "The best way to predict the future is to create it. Keep exploring, keep experimenting, and make your mark in technology" },
	]

	const GalleryData = [
		{ id: 0, cardType: 'double', cardImg: '/assets/GalleryImg1.png', ImgDescriptionStats: "1000's", ImgDescription: 'house participants', isReversed: false },
		{ id: 1, cardType: 'single', cardImg: '/assets/GalleryImg2.png' },
		{ id: 2, cardType: 'double', cardImg: '/assets/GalleryImg3.png', ImgDescriptionStats: "100's", ImgDescription: 'developers building during hackathons', isReversed: true },
		{ id: 3, cardType: 'single', cardImg: '/assets/GalleryImg4.png' },
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

			{/* FOOTER SECTION */}
			<FooterSection />

		</>
	)
}


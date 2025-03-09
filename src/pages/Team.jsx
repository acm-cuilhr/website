import TeamHeroSection from "../components/TeamHeroSection";
import TeamMembersSection from "../components/TeamMembersSection";

export default function Team() {
	const TeamMembersData = [
		{
			id: 0,
			profileURL: "/assets/direcotrate/sir_imran_raza.png",
			name: "Imran Raza",
			currentPosition: "Faculty advisor",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/imran-raza-35a3b0234/",
			},
		},
		{
			id: 1,
			profileURL: "/assets/direcotrate/amna_advisor.png",
			name: "Amna Hussain",
			currentPosition: "Senior Advisor",
			exPositions:
				"Ex-President, Ex-General Secretary, Ex-Director Event Management",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/amna-hussain-549426251/",
			},
		},
		{
			id: 2,
			profileURL: "/assets/direcotrate/saadaan.png",
			name: "Saadaan Hassan",
			currentPosition: "President",
			exPositions: "Ex-Director Web Dev Team, Ex-Co Director Web Dev Team",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/saadaan-hassan/",
				instagram: "https://www.instagram.com/saadaanhassan/",
			},
		},
		{
			id: 3,
			profileURL: "/assets/direcotrate/aimen.png",
			name: "Aimen Munir",
			currentPosition: "Vice President",
			exPositions: "Ex-Co Director Social Media Team",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/aimen-munir-70134529b/",
				instagram:
					"https://www.instagram.com/aimenmnr?igsh=MW45eDBtNWM2dmZ6ZA==",
			},
		},
		{
			id: 4,
			profileURL: "/assets/direcotrate/amna_iftikher.png",
			name: "Amina Iftikhar",
			currentPosition: "Treasurer",
			exPositions: "Women-in-Tech Lead",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/amina-iftikhar-717612281/",
			},
		},
		{
			id: 5,
			profileURL: "/assets/direcotrate/waqas.png",
			name: "Waqas Ul Hassan",
			currentPosition: "General Secretary",
			exPositions: "Ex-Under General Secretary",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/waqasuh/",
			},
		},
		{
			id: 6,
			profileURL: "/assets/direcotrate/arham.png",
			name: "Arham Atique",
			currentPosition: "Under General Secretary",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/arham-atique-824477284/",
			},
		},
		{
			id: 7,
			profileURL: "/assets/direcotrate/sufiyan.png",
			name: "Sufyan Ahmad",
			currentPosition: "Under General Secretary",
			exPositions: "Ex-Co Director Coding Team",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/sufy-expert/",
				instagram: "https://www.instagram.com/sufy_expert/",
			},
		},
		{
			id: 8,
			profileURL: "/assets/direcotrate/zeeshan.png",
			name: "Zeeshan Zafar",
			currentPosition: "Diretor, Coding Team",
			exPositions: "Ex-Co Director Coding Team",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/zeeshi-ch/",
			},
		},
		{
			id: 9,
			profileURL: "/assets/direcotrate/zeeshan.png",
			name: "Abdullah Rasheed",
			currentPosition: "Co-Director, Coding Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/abdullah-rasheed-shiekh/",
			},
		},
		{
			id: 10,
			profileURL: "/assets/direcotrate/nouman.png",
			name: "Muhammad Nouman",
			currentPosition: "Co-Director, Coding Team",
			exPositions: "",
			socialLinks: {
				linkedin:
					"https://www.linkedin.com/in/muhammad-nouman-5656b8159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				instagram: "https://www.facebook.com/share/15dQjHjrG9/",
			},
		},
		{
			id: 11,
			profileURL: "/assets/direcotrate/avaiza.png",
			name: "Avaiza Shahid.",
			currentPosition: "Co-Director, Coding Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/avaiza-shahid",
				instagram:
					"https://www.facebook.com/profile.php?id=100088845558237&mibextid=ZbWKwL",
			},
		},
		{
			id: 12,
			profileURL: "/assets/direcotrate/amna.png",
			name: "Amna Tariq",
			currentPosition: "Director, Social Media Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/aamna-tariq-6ba8752b1/",
				instagram: "https://www.instagram.com/aamnww/",
			},
		},
		{
			id: 13,
			profileURL: "/assets/direcotrate/aimen.png",
			name: "Ali Ramzan",
			currentPosition: "Co-Director, Social Media Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/muhammad-ali-ramzan-176527173/",
				instagram: "https://www.instagram.com/elyclix/",
			},
		},
		{
			id: 14,
			profileURL: "/assets/direcotrate/umair.png",
			name: "Umair Amjad",
			currentPosition: "Director, Events Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/umair-amjad-166a00281/",
				instagram: "https://www.instagram.com/umairizzz?igsh=YjM3MDBzdnJxY2Iz",
			},
		},
		{
			id: 15,
			profileURL: "/assets/direcotrate/zunair.png",
			name: "Zunair Ilyas",
			currentPosition: "Co-Director, Events Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/zunair-ilyas-6887972b0/",
				instagram:
					"https://www.instagram.com/its_zunair8?igsh=b3c5Y3BrZ2R5YW4y",
			},
		},
		{
			id: 16,
			profileURL: "/assets/direcotrate/maha.png",
			name: "Maha Rauf",
			currentPosition: "Director, Graphics Team",
			exPositions: "Ex-Co Director Graphics Team",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/maha-rauf-0532432a8/",
				instagram: "https://www.instagram.com/maharauff/profilecard/",
			},
		},
		{
			id: 17,
			profileURL: "/assets/direcotrate/maha.png",
			name: "Muhammad Umer",
			currentPosition: "Co-Director, Graphics Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/muhammad-umer-65432b225/",
				instagram: "https://www.instagram.com/0mermuhammd/",
			},
		},
		{
			id: 18,
			profileURL: "/assets/direcotrate/maha.png",
			name: "Raheema Aman",
			currentPosition: "Co-Director, Graphics Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/raheema-rajput-700927279/",
				instagram: "https://www.instagram.com/raheema_rajput/",
			},
		},
		{
			id: 19,
			profileURL: "/assets/direcotrate/maha.png",
			name: "Marwa",
			currentPosition: "Co-Director, Graphics Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/raheema-rajput-700927279/",
				instagram: "https://www.instagram.com/raheema_rajput/",
			},
		},
		{
			id: 20,
			profileURL: "/assets/direcotrate/hamza.png",
			name: "Ali Hamza",
			currentPosition: "Director, Marketing Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/ali-hamza-254380317/",
				instagram: "https://www.instagram.com/hamzaiftikhhar/",
			},
		},
		{
			id: 21,
			profileURL: "/assets/direcotrate/abdullah_shahid.png",
			name: "Abdullah Shahid",
			currentPosition: "Co-Director, Marketing Team",
			exPositions: "",
			socialLinks: {
				linkedin:
					"https://www.linkedin.com/in/muhammad-abdullah-shahid-587705251/",
			},
		},
		{
			id: 22,
			profileURL: "/assets/direcotrate/moaz.png",
			name: "Muaz Jamil",
			currentPosition: "Director, Photography Team",
			exPositions: "",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/muaz-jamil-197595210/",
				instagram: "https://www.instagram.com/visualsbymuaz/",
			},
		},
		{
			id: 23,
			profileURL: "/assets/direcotrate/moaz.png",
			name: "Saad Ahmad",
			currentPosition: "Co-Director, Photography Team",
			exPositions: "",
			socialLinks: {
				instagram: "https://www.instagram.com/s44d.fx/",
			},
		},
	];

	return (
		<>
			{/* HERO SECTION */}
			<TeamHeroSection />

			{/* MEMBERS SECTION */}
			<TeamMembersSection TeamMembersData={TeamMembersData} />
		</>
	);
}

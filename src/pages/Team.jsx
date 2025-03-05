import TeamHeroSection from "../components/TeamHeroSection";
import TeamMembersSection from "../components/TeamMembersSection";

export default function Team() {
	const TeamMembersData = [
		{
			id: 0,
			profileURL: "/assets/direcotrate/sir_imran_raza.png",
			name: "Imran Raza",
			currentPosition: "Faculty advisor",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://linkedin.com",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 1,
			profileURL: "/assets/direcotrate/amna_advisor.png",
			name: "Amna Hussain",
			currentPosition: "Student Advisor",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://www.linkedin.com/in/amna-hussain-549426251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 2,
			profileURL: "/assets/direcotrate/saadaan.png",
			name: "Saadaan Hassan",
			currentPosition: "President",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://www.linkedin.com/in/saadaan-hassan/",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 0,
			profileURL: "/assets/direcotrate/shafin.png",
			name: "Shafin-Uz-Zaman",
			currentPosition: "Vice President",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://linkedin.com/in/shafin-zaman",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 1,
			profileURL: "/assets/direcotrate/amna_iftikher.png",
			name: "Amna Iftikhar",
			currentPosition: "Treasurer",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "http://www.linkedin.com/in/amina-iftikhar-717612281",
				facebook: "https://www.facebook.com/amna.iftikhar.33234",
			},
		},
		{
			id: 2,
			profileURL: "/assets/direcotrate/zohaib.png",
			name: "Zohaib Bukhari",
			currentPosition: "General Secretary",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://www.linkedin.com/in/zohaib-bukhari",
				facebook: "https://www.facebook.com/zohaib.bukhari.393?mibextid=ZbWKwL",
			},
		},
		{
			id: 0,
			profileURL: "/assets/direcotrate/waqas.png",
			name: "Waqas Ul Hassan",
			currentPosition: "Under General Secretary",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "http://LinkedIn.com/in/waqasuh",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 1,
			profileURL: "/assets/direcotrate/arham.png",
			name: "Arham Atique",
			currentPosition: "Under General Secretary",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "http://www.linkedin.com/in/arham-atique-824477284",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 2,
			profileURL: "/assets/direcotrate/shayaan.png",
			name: "Muhammad Shayaan",
			currentPosition: "Lead, 404 Squad",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://www.linkedin.com/in/muhammad-shayaan-082551262/",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 0,
			profileURL: "/assets/direcotrate/zeeshan.png",
			name: "Zeeshan Zafar",
			currentPosition: "Head, 404 Squad",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://www.linkedin.com/in/zeeshi-ch?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 1,
			profileURL: "/assets/direcotrate/nouman.png",
			name: "Muhammad Nouman",
			currentPosition: "Head, 404 Squad",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://www.linkedin.com/in/muhammad-nouman-5656b8159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				facebook: "https://www.facebook.com/share/15dQjHjrG9/",
			},
		},
		{
			id: 2,
			profileURL: "/assets/direcotrate/avaiza.png",
			name: "Avaiza Shahid.",
			currentPosition: "Head, 404 Squad",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://www.linkedin.com/in/avaiza-shahid",
				facebook:
					"https://www.facebook.com/profile.php?id=100088845558237&mibextid=ZbWKwL",
			},
		},
		{
			id: 0,
			profileURL: "/assets/direcotrate/sufiyan.png",
			name: "Sufiyan Ahmed",
			currentPosition: "Head, 404 Squad",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://www.linkedin.com/in/sufy-expert/",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 1,
			profileURL: "/assets/direcotrate/amna.png",
			name: "Amna Tariq",
			currentPosition: "Lead, Hashtag Heroes",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://www.linkedin.com/in/aamna-tariq-6ba8752b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
				facebook: "https://www.facebook.com/aamna.tariq.18?mibextid=kFxxJD",
			},
		},
		{
			id: 2,
			profileURL: "/assets/direcotrate/aimen.png",
			name: "Aimen Munir",
			currentPosition: "Co-Lead, Hashtag Heroes",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://www.linkedin.com/in/aimen-munir-70134529b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 0,
			profileURL: "/assets/direcotrate/umair.png",
			name: "Umair Amjad",
			currentPosition: "Lead, Event Emperors",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://www.linkedin.com/in/umair-amjad-166a00281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				facebook: "https://www.facebook.com/share/19Yka3aRPE/",
			},
		},
		{
			id: 1,
			profileURL: "/assets/direcotrate/zunair.png",
			name: "Zunair Ilyas",
			currentPosition: "Co-Lead Event Emperors",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://x.com/ZunairIlyas5?t=UTX5rkDhucb-bImEE5LGNg&s=08",
				linkedin:
					"https://www.linkedin.com/in/zunair-ilyas-6887972b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				facebook:
					"https://www.facebook.com/profile.php?id=61551016012354&mibextid=ZbWKwL",
			},
		},
		{
			id: 2,
			profileURL: "/assets/direcotrate/ammar.png",
			name: "Ammar Ahmed",
			currentPosition: "Lead, Pixel Pioneers",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://www.linkedin.com/in/ammarahmd",
				facebook: "https://www.facebook.com/share/14QkySDebT/?mibextid=qi2Omg",
			},
		},
		{
			id: 0,
			profileURL: "/assets/direcotrate/maha.png",
			name: "Maha Rauf",
			currentPosition: "Co-Lead, Pixel Pioneers",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://www.linkedin.com/in/maha-rauf-0532432a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 1,
			profileURL: "/assets/direcotrate/hamza.png",
			name: "Ali Hamza",
			currentPosition: "Lead, Marketing Team",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin: "https://linkedin.com",
				facebook: "https://facebook.com",
			},
		},
		{
			id: 2,
			profileURL: "/assets/direcotrate/abdullah_shahid.png",
			name: "Abdullah Shahid",
			currentPosition: "Co-Lead, Marketing Team",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://pk.linkedin.com/in/muhammad-abdullah-shahid-587705251?trk=people-guest_people_search-card",
				facebook: "https://www.facebook.com/m.abdullahshahid2003",
			},
		},
		{
			id: 0,
			profileURL: "/assets/direcotrate/moaz.png",
			name: "Muaz Jamil",
			currentPosition: "Lead, Photography",
			exPositions:
				"EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead",
			socialLinks: {
				twitter: "https://twitter.com",
				linkedin:
					"https://www.linkedin.com/in/muaz-jamil-197595210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				facebook: "https://facebook.com",
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

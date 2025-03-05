import EventCard from "./EventCard";

const eventsData = [
	{
		id: 1,
		size: "large",
		title: "Web-e-thon: TechnoVerse 2.0",
		date: "2024-03-15",
		image: "/assets/events/Webathon1.jpeg",
		isCompetition: true,
		description:
			"A web development challenge to test creativity and coding skills.",
		detailDescription:
			"Join the ultimate web development challenge where creativity meets functionality. Compete to build innovative and user-friendly web solutions.",
		details: {
			detail1:
				"Participants will be given a specific theme and must design a fully functional website within the allotted time. Judges will evaluate based on design, responsiveness, and usability.",
			detail2:
				"Teams or individuals can participate, and frameworks of choice are allowed. Presentations will be held at the end to showcase the work",
		},
		rules: {
			rule1: "The project must be built within the competition timeframe.",
			rule2: "Teams can have a maximum of 3 members.",
			rule3: "Pre-built templates are not allowed; originality is key.",
		},
	},
	{
		id: 6,
		size: "large",
		title: "Coding Spree: TechnoVerse 3.0",
		date: "2024-06-22",
		image: "/assets/events/CodingSpree.jpeg",
		isCompetition: true,
		description:
			"A fast-paced coding competition to challenge logic and problem-solving skills.",
		detailDescription:
			"A high-paced coding battle where problem-solving and logical thinking are put to the test. Compete with fellow coders in real-time challenges.",
		details: {
			detail1:
				"Participants will solve a series of coding problems with increasing difficulty. The one with the most correct solutions in the least amount of time wins.",
			detail2:
				"The competition covers algorithms, data structures, and logical problem-solving across multiple programming languages.",
		},
		rules: {
			rule1: "Participants can use C++, Python, Javascript or Java.",
			rule2: "No external help or internet search is allowed.",
			rule3: "Solutions must be efficient and optimized.",
		},
	},
	{
		id: 2,
		size: "medium",
		title: "Scavenger Hunt: TechnoVerse 3.0",
		date: "2024-02-20",
		image: "/assets/events/ScavengerHunt.jpeg",
		isCompetition: true,
		description:
			"Solve clues, race against time, and uncover hidden secrets around campus.",
		detailDescription:
			"A thrilling adventure where teams solve cryptic clues and race across the campus to uncover hidden locations and win exciting prizes.",
		details: {
			detail1:
				"Teams will be given a series of clues leading to different checkpoints. Each checkpoint will require solving a puzzle or challenge to proceed to the next stage.",
			detail2:
				"The first team to reach the final destination with all correct answers wins.",
		},
		rules: {
			rule1: "Teams must consist of 2-4 members.",
			rule2: "Clues must be solved in sequence; skipping is not allowed.",
			rule3:
				"Tampering with clues or misleading other teams will result in disqualification.",
		},
	},
	{
		id: 3,
		size: "medium",
		title: "Orientation Fall 24",
		date: "2023-12-10",
		image: "/assets/events/Orientation.jpeg",
		isCompetition: false,
		description:
			"A welcoming session to introduce new members to ACM and its opportunities.",
		detailDescription:
			"A warm welcome to new members! Join us for an interactive session where we introduce you to ACM’s mission, upcoming events, and the exciting opportunities ahead.",
		details: {
			heading: "What to Expect?",
			detail1:
				"Learn about ACM’s initiatives, meet the executive team, and discover how you can actively participate in shaping the future of tech at COMSATS.",
			detail2:
				"The session includes an engaging Q&A, networking activities, and insights from ACM alumni on how ACM helped them grow.",
		},
		rules: {
			heading: "Why Attend?",
			rule1: "Get firsthand knowledge about ACM and its impact.",
			rule2: "Connect with fellow tech enthusiasts and seniors.",
			rule3: "Find out how you can contribute to ACM’s success.",
		},
	},
	{
		id: 5,
		size: "small",
		title: "Prize Distribution Ceremony",
		date: "2024-05-18",
		image: "/assets/events/PriceDistribution.jpeg",
		isCompetition: false,
		description: "Recognizing and celebrating the champions of TechnoVerse.",
		detailDescription:
			"Celebrating excellence! This ceremony honors the champions of TechnoVerse 3.0, recognizing their dedication, skills, and achievements.",
		details: {
			heading: "Honoring the Winners",
			detail1:
				"Winners from various competitions will be awarded trophies, certificates, and exclusive ACM merchandise. Special recognition will be given to standout performances.",
			detail2:
				"This event is not just about awards—it’s about celebrating talent, effort, and the spirit of competition.",
		},
		rules: {
			heading: "Why Attend?",
			rule1: "Support and cheer for your peers and friends.",
			rule2: "Get inspired by the success stories of top performers.",
			rule3: "Enjoy a memorable closing ceremony for TechnoVerse 3.0.",
		},
	},
	{
		id: 4,
		size: "small",
		title: "Registration Week Fall 24",
		date: "2024-04-10",
		image: "/assets/events/Registration.jpeg",
		isCompetition: false,
		description:
			"Kickstart your ACM journey by signing up during the registration drive.",
		detailDescription:
			"Kickstart your ACM journey! Registration Week is your gateway to becoming a part of the ACM CUI Lahore Chapter. Join us to unlock opportunities in tech, networking, and professional growth.",
		details: {
			heading: "How to Register?",
			detail1:
				"Visit our registration desk on campus or sign up online. Our team will guide you through the process and answer any questions about ACM’s activities and benefits.",
			detail2:
				"Exclusive perks await early registrants, including priority access to upcoming events, competitions, and networking sessions.",
		},
		rules: {
			heading: "Why Join?",
			rule1:
				"Get access to tech workshops, hackathons, and exclusive competitions.",
			rule2: "Network with industry professionals and like-minded peers.",
			rule3:
				"Boost your resume with hands-on projects and leadership opportunities.",
		},
	},
	{
		id: 7,
		size: "small",
		title: "Notion Template Design",
		date: "2024-07-05",
		image: "/assets/events/Notion.jpeg",
		isCompetition: true,
		description:
			"Show off your productivity skills by designing efficient Notion templates.",
		detailDescription:
			"Put your organization and design skills to the test by creating the most efficient and visually appealing Notion template.",
		details: {
			detail1:
				"Participants must create a functional Notion template that enhances productivity and workflow. Templates can be for project management, academics, or personal organization.",
			detail2:
				"Submissions will be judged on creativity, usability, and structure. Bonus points for automation and integrations.",
		},
		rules: {
			rule1: "The template must be designed within the competition timeframe",
			rule2:
				"Participants must present their template and explain its functionality",
			rule3: "No pre-made templates; originality is required.",
		},
	},
	{
		id: 8,
		size: "small",
		title: "FIFA & Tekken Tournament",
		date: "2024-08-12",
		image: "/assets/events/Fifa.jpeg",
		isCompetition: true,
		description:
			"Compete against the best in thrilling FIFA and Tekken battles.",
		detailDescription:
			"Step into the virtual arena and showcase your gaming prowess in two of the most competitive esports titles.",
		details: {
			detail1:
				"Players will compete in a knockout-style tournament for FIFA and Tekken. Each match will determine who moves forward to the next round.",
			detail2:
				"The finals will be streamed live with commentary, adding to the excitement.",
		},
		rules: {
			rule1:
				"FIFA will be played on PlayStation; Tekken format will be decided beforehand.",
			rule2: "No external modifications or cheats allowed.",
			rule3: "Unsportsmanlike behavior will result in disqualification.",
		},
	},
];

export default function EventsGrid() {
	return (
		<section className=" py-16 px-5 md:px-10 lg:px-[120px]">
			<div className="max-w-[1300px] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6">
					{eventsData.map((event) => (
						<div
							key={event.id}
							className={`
                ${
									event.size === "large"
										? "md:col-span-2 lg:col-span-2 row-span-2"
										: ""
								}
                ${event.size === "medium" ? "md:col-span-2 lg:col-span-2" : ""}
                ${event.size === "small" ? "md:col-span-1 lg:col-span-1" : ""}
              `}>
							<EventCard event={event} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

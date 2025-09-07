import { useEffect, useState } from "react";
import ContributorCard from "./ContributorCard";
import TeamMemberCards from "./TeamMemberCards";

const designedBy = {
	id: 1,
	profileURL: "/assets/direcotrate/ammar.png",
	name: "Ammar Ahmad",
	currentPosition: "UI Design Contributor",
	exPositions: "Ex Director, Graphics Team",
	socialLinks: {
		linkedin: "https://www.linkedin.com/in/rohitkumar-2001/",
		instagram: "https://www.instagram.com/rohitkumar_2001/",
	},
};

export default function ContributorSection() {
	// FUNCTIONS

	async function fetchContributors() {
		try {
			const response = await fetch(
				"https://api.github.com/repos/acm-cuilhr/website/contributors"
			);
			const data = await response.json();
			setContributorsData(data);
		} catch (error) {
			console.log(error);
		}
	}

	// VARIABLES

	const [ContributorsData, setContributorsData] = useState([]);

	// CODE

	useEffect(() => {
		fetchContributors();
	}, []);

	// RETURN

	return (
		<section className="flex flex-col justify-center items-center px-5 py-10 md:px-10 md:py-[80px] lg:px-[120px] lg:py-[120px]">
			<div className="w-full flex flex-wrap flex-row gap-6 items-center justify-center">
				{ContributorsData.map((contributor) => {
					return (
						<ContributorCard key={contributor.id} contributor={contributor} />
					);
				})}
			</div>

			{/* Designed By */}
			<div className="mt-10 w-full space-y-5 flex flex-col items-center">
				<h2 className="text-5xl text-white">Designed By</h2>
				<TeamMemberCards teamMember={designedBy} />
			</div>
		</section>
	);
}

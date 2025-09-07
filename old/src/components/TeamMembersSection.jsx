import TeamMemberCards from "./TeamMemberCards";

export default function TeamMembersSection(props) {
	const { TeamMembersData } = props;

	return (
		<section className="flex justify-center items-center px-5 md:px-10 lg:px-[120px] pb-20">
			<div className="w-full xl:w-[1300px] flex flex-wrap flex-row gap-6 items-center justify-center">
				{TeamMembersData.map((teamMember, index) => {
					return (
						<TeamMemberCards key={teamMember.id} teamMember={teamMember} />
					);
				})}
			</div>
		</section>
	);
}

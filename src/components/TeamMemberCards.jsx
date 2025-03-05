import { motion } from "framer-motion";
import { useState } from "react";

export default function TeamMemberCards(props) {
	const [Flip, setFlip] = useState(false);
	const { id, profileURL, name, currentPosition, exPositions, socialLinks } =
		props.teamMember;

	return (
		<motion.div
			className="card cursor-pointer"
			onClick={() => {
				setFlip(!Flip);
			}}
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ type: "spring", duration: 0.8 }}>
			<div className={`card-inner ${Flip ? "cardRotate" : null}`}>
				{/* CARD FRONT SIDE */}
				<div className="card-front p-4">
					<div className="w-full h-full flex flex-col items-center mt-4">
						{/* MEMBER IMAGE CONTAINER */}
						<div className="relative">
							<div className="h-[160px] w-[160px] rounded-full overflow-hidden">
								<img
									className="h-full w-full object-cover"
									src={profileURL}
									alt=""
								/>
							</div>

							{/* FLIP BUTTON */}
							<button
								className="absolute bottom-2 right-[-10px] bg-gradient-to-b from-[#E64467] to-[#7E5CC5] flex justify-center items-center w-[50px] h-[50px] z-20 rounded-full cursor-pointer"
								onClick={() => {
									setFlip(true);
								}}>
								<img src="/assets/icons/flip.svg" alt="" />
							</button>
						</div>

						<div className="w-full h-full flex flex-col items-center justify-center mt-4">
							{/* MEMBER POSITION */}
							<h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#E64467] to-[#7E5CC5] font-bold text-2xl text-center">
								{currentPosition}
							</h1>
							{/* MEMBER NAME */}
							<h1 className="text-lg font-semibold text-white mt-2">{name}</h1>
						</div>

						{/* MEMBER SOCIAL LINKS */}
						<div className="flex flex-row items-center mt-2 mx-auto">
							<a
								className={`ml-2 mr-2 ${socialLinks.twitter ? null : "hidden"}`}
								href={socialLinks.twitter}
								target="_blank">
								<i className="fa-brands fa-twitter text-2xl text-[#888]"></i>
							</a>
							<a
								className={`ml-2 mr-2 ${
									socialLinks.facebook ? null : "hidden"
								}`}
								href={socialLinks.facebook}
								target="_blank">
								<i className="fa-brands fa-facebook text-2xl text-[#888]"></i>
							</a>
							<a
								className={`ml-2 mr-2 ${
									socialLinks.linkedin ? null : "hidden"
								}`}
								href={socialLinks.linkedin}
								target="_blank">
								<i className="fa-brands fa-linkedin text-2xl text-[#888]"></i>
							</a>
						</div>
					</div>
				</div>

				{/* CARD BACK SIDE */}
				<div className="card-back p-4 flex-col">
					<div className="w-full h-full flex flex-col items-center justify-center relative">
						{/* MEMBER POSITION */}
						<h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#E64467] to-[#7E5CC5] font-bold text-2xl text-center">
							{currentPosition}
						</h1>

						{/* MEMBER NAME */}
						<h1 className="text-lg font-semibold text-white mt-2 text-center">
							{name}
						</h1>
					</div>
					{/* MEMBER SOCIAL LINKS */}
					<div className="flex flex-row items-center mt-4">
						<a
							className={`ml-2 mr-2 ${socialLinks.twitter ? null : "hidden"}`}
							href={socialLinks.twitter}
							target="_blank">
							<i className="fa-brands fa-twitter text-2xl text-[#888]"></i>
						</a>
						<a
							className={`ml-2 mr-2 ${socialLinks.facebook ? null : "hidden"}`}
							href={socialLinks.facebook}
							target="_blank">
							<i className="fa-brands fa-facebook text-2xl text-[#888]"></i>
						</a>
						<a
							className={`ml-2 mr-2 ${socialLinks.linkedin ? null : "hidden"}`}
							href={socialLinks.linkedin}
							target="_blank">
							<i className="fa-brands fa-linkedin text-2xl text-[#888]"></i>
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

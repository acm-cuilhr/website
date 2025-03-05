import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			when: "beforeChildren",
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const borderVariants = {
	hidden: { scaleX: 0 },
	visible: { scaleX: 1 },
};

export default function WhyJoinACM() {
	return (
		<div className="flex flex-col lg:flex-row lg:justify-between mt-[150px] w-full 2xl:w-[1300px]">
			<motion.div
				className="lg:w-[30%] lg:h-full"
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ margin: "0px 0px -100px 0px" }} // Removed once: true
				transition={{ type: "tween", duration: 0.6 }}>
				<h1 className="text-center text-white lg:text-start text-[32px] md:text-[48px] font-bold font-poppins mt-2">
					Why to join ACM?
				</h1>
			</motion.div>

			<motion.div
				className="lg:w-[70%] lg:h-full flex items-center flex-col md:flex-row mt-5 lg:mt-0"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ margin: "0px 0px -100px 0px" }} // Removed once: true
			>
				<div className="md:w-[50%] h-full sm:mt-[100px]">
					{[
						{ color: "#1FCFF1", title: "Exclusive Tech Competitions" },
						{ color: "#9945FF", title: "Workshops & Learning Sessions" },
					].map((item, index) => (
						<div key={index} className="w-full h-[50%] p-5 md:mt-20">
							<motion.div
								className="relative pl-4 ml-[-1rem]"
								variants={itemVariants}
								whileInView="visible"
								initial="hidden"
								viewport={{ margin: "0px 0px -100px 0px" }} // Removed once: true
							>
								<motion.div
									className="absolute left-0 top-0 h-full w-1 origin-left bg-current"
									variants={borderVariants}
									transition={{ duration: 0.6 }}
									style={{ color: item.color }}
								/>
								<h1 className="text-2xl md:text-3xl font-bold text-white">
									{item.title}
								</h1>
							</motion.div>
							<motion.p
								className="mt-3 text-[#C4C4C4] md:text-lg"
								variants={itemVariants}
								transition={{ duration: 0.4 }}
								whileInView="visible"
								initial="hidden"
								viewport={{ margin: "0px 0px -100px 0px" }} // Removed once: true
							>
								{index === 0
									? "Participate in coding contests, hackathons, and innovative competitions to test and enhance your technical skills."
									: "Gain hands-on experience through expert-led workshops, seminars, and training sessions on the latest technologies."}
							</motion.p>
						</div>
					))}
				</div>

				<div className="md:w-[50%] h-full">
					{[
						{ color: "#FFD512", title: "Networking & Career Growth" },
						{ color: "#19FB9B", title: "Leadership & Teamwork Experience" },
					].map((item, index) => (
						<div key={index} className="w-full h-[50%] p-5 md:mt-20">
							<motion.div
								className="relative pl-4 ml-[-1rem]"
								variants={itemVariants}
								whileInView="visible"
								initial="hidden"
								viewport={{ margin: "0px 0px -100px 0px" }} // Removed once: true
							>
								<motion.div
									className="absolute left-0 top-0 h-full w-1 origin-left bg-current"
									variants={borderVariants}
									transition={{ duration: 0.6 }}
									style={{ color: item.color }}
								/>
								<h1 className="text-2xl md:text-3xl font-bold text-white">
									{item.title}
								</h1>
							</motion.div>
							<motion.p
								className="mt-3 text-[#C4C4C4] md:text-lg"
								variants={itemVariants}
								transition={{ duration: 0.4 }}
								whileInView="visible"
								initial="hidden"
								viewport={{ margin: "0px 0px -100px 0px" }} // Removed once: true
							>
								{index === 0
									? "Connect with industry professionals, alumni, and like-minded peers to expand your professional network and career opportunities."
									: "Take on leadership roles, collaborate on projects, and contribute to ACM initiatives to build essential teamwork and management skills."}
							</motion.p>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
}

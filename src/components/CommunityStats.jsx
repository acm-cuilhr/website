import { motion } from "framer-motion";
import StatsItem from "./StatsItem";

export default function CommunityStats() {
	return (
		<div className="flex flex-col lg:flex-row justify-between h-full w-full 2xl:w-[1300px]">
			{/* Left Section - Text Content */}
			<div className="lg:w-[70%] flex flex-col justify-start items-center lg:items-start">
				<motion.h1
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ type: "spring" }}
					className="text-white text-center lg:text-start text-[32px] md:text-[48px] font-bold font-poppins leading-tight">
					Join ACM Today – <br className="hidden md:block" />
					Unlock Exclusive Opportunities in Tech!
				</motion.h1>

				<motion.p
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ type: "spring" }}
					className="text-white text-center lg:text-start text-[16px] md:text-[20px] font-poppins mt-4 lg:w-[80%]">
					Connect with like-minded individuals, enhance your technical skills,
					and be a part of exciting tech events. Your journey starts here!
				</motion.p>
			</div>

			{/* Right Section - Stats */}
			<div className="lg:w-[30%] h-full flex items-center flex-col stats">
				<StatsItem
					number={1000}
					suffix="+"
					text={["TOTAL", "MEMBERS"]}
					gradient="bg-gradient-to-r from-[#F087FF] to-[#6E1FCE]"
				/>
				<StatsItem
					number={90}
					suffix="%"
					text={["ACTIVE", "MEMBERS"]}
					gradient="bg-gradient-to-r from-[#1FCFF1] via-[#1FCFF1] to-[#234CB6]"
				/>
				<StatsItem
					number={70}
					suffix="%"
					text={["YEARLY GROWTH RATE"]}
					gradient="bg-gradient-to-r from-[#19FB9B] via-[#199890] to-[#005F59]"
				/>
			</div>
		</div>
	);
}

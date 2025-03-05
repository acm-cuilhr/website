import { motion } from "framer-motion";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const GallerySection = (props) => {
	const { GalleryData } = props;

	return (
		<section className="bg-[url('/assets/GallerybgImg.png')] bg-cover bg-center">
			{/* HEADING */}
			<div className="flex justify-center items-center w-full p-5 py-14 md:p-10 lg:px-[120px] lg:py-[80px]">
				<div className="flex justify-center lg:justify-start w-full xl:w-[1300px] lg:mt-10">
					<motion.h1
						className="font-poppins text-[32px] md:text-[48px] font-bold text-white"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "spring" }}>
						Past Events Gallery
					</motion.h1>
				</div>
			</div>

			{/* INFINITE MOVING CARDS */}
			<div className="mt-5 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards
					items={GalleryData}
					direction="right"
					speed="normal"
				/>
			</div>

			{/* START JOINING */}
			<motion.div
				className="w-full flex flex-col justify-center items-center pb-[110px]"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ type: "spring" }}>
				<h1 className="font-bold text-white text-[22px] md:text-[36px] text-center px-[20px] md:px-[70px] lg:px-[200px] mt-[140px]">
					It's time to join the thousands of creators, artists, and developers
				</h1>
				<button className="rounded-full w-[140px] md:w-[160px] h-10 md:h-12 bg-gradient-to-r from-[#F087FF] via-[#6E1FCE] to-[#6E1FCE33] text-white hover:shadow-[0_0_15px_2px_#F087FF] mt-10">
					START JOINING
				</button>
			</motion.div>
		</section>
	);
};

export default React.memo(GallerySection);

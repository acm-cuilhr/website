import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className='h-[80vh] lg:h-screen bg-[url("./assets/Effectherosection.png")] bg-no-repeat bg-cover bg-center px-5 md:px-10 lg:px-0'>
			<motion.div
				className="flex flex-col items-center w-full h-full"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ type: "spring", duration: 0.8 }}>
				{/* ACM HEADING */}
				<h1 className="text-[100px] md:text-[178px] font-semibold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#56B4F0] via-[#F9C0CF] to-[#8B9BEC] mt-[18vh] md:mt-[20vh]">
					ACM
				</h1>

				{/* TEXT */}
				<div className="font-medium text-white md:text-2xl lg:w-[60%] text-center opacity-80">
					ACM (Association for Computing Machinery) Student Chapters are
					university-based organisations that aim to foster interest and
					involvement in computer science and related fields among students
				</div>

				{/* BUTTONS */}
				<div className="flex flex-row mt-8">
					<button className="rounded-full w-[120px] md:w-[160px] h-10 md:h-12 bg-gradient-to-r from-[#F087FF] via-[#6E1FCE] to-[#6E1FCE33] text-white hover:shadow-[0_0_15px_2px_#F087FF]">
						JOIN NOW
					</button>
					{/* <button className='border-2 border-white rounded-full w-[120px] md:w-[140px] h-10 md:h-12 bg-gradient-to-r text-white ml-4 hover:shadow-[0_0_15px_2px_#F087FF]'>READ DOCS</button> */}
				</div>
			</motion.div>
		</section>
	);
};

export default React.memo(HeroSection);

import { motion } from "framer-motion";

const EventHeader = () => {
	return (
		<motion.section
			className='h-[70vh] lg:h-screen bg-[url("/assets/GallerybgImg.png")] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-5 md:px-10 lg:px-0'
			// className='h-[50vh] bg-[url("/assets/GallerybgImg.png")] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-5 md:px-10 lg:px-0'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			<div className="flex items-center flex-col text-center">
				<motion.h1
					className="italic text-[24px] md:text-[50px] text-white"
					initial={{ y: 20 }}
					animate={{ y: 0 }}
					transition={{ delay: 0.2 }}>
					Our
				</motion.h1>
				<motion.h1
					className="text-[42px] md:text-[90px] lg:text-[158px] font-semibold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#56B4F0] via-[#F9C0CF] to-[#8B9BEC]"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", duration: 0.8 }}>
					Events
				</motion.h1>
				<motion.p
					className="text-white font-light md:text-xl lg:text-4xl tracking-widest text-center mt-5"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}>
					Code, Create, Conquer
				</motion.p>
			</div>
		</motion.section>
	);
};

export default EventHeader;

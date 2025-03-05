import { motion } from "framer-motion";

const EventHeader = () => {
	return (
		<motion.section
			className="h-[50vh]  flex flex-col items-center justify-center px-5 md:px-10 lg:px-0"
			// className='h-[50vh] bg-[url("/assets/GallerybgImg.png")] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-5 md:px-10 lg:px-0'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			<div className="flex items-center flex-col text-center">
				<motion.h1
					className="italic text-2xl md:text-4xl text-gray-300 mb-4"
					initial={{ y: 20 }}
					animate={{ y: 0 }}
					transition={{ delay: 0.2 }}>
					ACM Presents
				</motion.h1>
				<motion.h1
					className="text-4xl md:text-6xl lg:text-8xl font-semibold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#56B4F0] via-[#F9C0CF] to-[#8B9BEC]"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", duration: 0.8 }}>
					TechoVerse
				</motion.h1>
				<motion.p
					className="text-gray-300 font-light text-lg md:text-xl mt-6 max-w-2xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}>
					Code, Create, Conquer - Join us in shaping the future of technology
				</motion.p>
			</div>
		</motion.section>
	);
};

export default EventHeader;

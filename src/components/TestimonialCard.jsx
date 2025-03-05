import { motion } from "framer-motion";

export default function TestimonialCard(props) {
	const { id, profileURL, name, profession, remarks } = props.testimonial;

	return (
		<motion.div
			className="bg-[#161E25] w-full md:w-[380px] lg:[400px] h-[400px] flex flex-col items-center p-6 pt-[100px] rounded-2xl relative mt-[100px]"
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.4 }}>
			{/* PROFILE IMAGE */}
			<div className="w-[120px] h-[120px] overflow-hidden rounded-full absolute top-[-60px]">
				<img src={profileURL} alt="" className="w-full h-full object-cover" />
			</div>

			<img src="/assets/Comma.svg" alt="" />
			<p className="font-semibold text-white text-lg text-center mt-6">
				{remarks}
			</p>
			<div className="absolute mx-auto bottom-6 flex flex-col justify-center items-center">
				<h1 className="text-xl text-[#C6C6C6] font-bold mt-5">{name}</h1>
				<p className="text-lg text-[#C6C6C6]">{profession}</p>
			</div>
		</motion.div>
	);
}

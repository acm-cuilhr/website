import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatsItem(props) {
	const { number, suffix, text, gradient } = props;

	const count = useMotionValue(0);
	const rounded = useTransform(count, (value) => {
		if (suffix == "+") {
			if (value >= 1000) {
				return `${(value / 1000).toFixed(1).replace(".0", "")}k+`;
			}
			return `${Math.round(value)}+`;
		} else {
			return `${Math.round(value)}%`;
		}
	});
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			const animation = animate(count, number, { duration: 1 });
			return () => animation.stop();
		}
	}, [isInView, count]);

	return (
		<motion.div
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ type: "spring" }}
			className="w-full flex flex-col justify-center items-center lg:block">
			<motion.h1
				ref={ref}
				className={`text-[78px] md:text-[98px] font-medium font-poppins bg-clip-text text-transparent ${gradient}`}
				id="totalmembers">
				{rounded}
			</motion.h1>
			{text.map((text, index) => {
				return <p className="text-[#C4C4C4] text-lg">{text}</p>;
			})}
		</motion.div>
	);
}

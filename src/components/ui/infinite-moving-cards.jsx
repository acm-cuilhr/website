import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}) => {
	const containerRef = React.useRef(null);
	const scrollerRef = React.useRef(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 w-full overflow-hidden lg:[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
				className
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}>
				{items.map((item, idx) =>
					item.cardType == "double" ? (
						// DOUBLE GALLERY CARD
						<div
							key={item.id}
							className={`mx-3 h-[420px] rounded-xl flex ${
								item.isReversed ? "flex-col-reverse" : "flex-col"
							} justify-between items-center transition-all`}>
							<div className="w-[300px] h-[200px] rounded-[8px] bg-[#19161C] flex flex-col justify-center items-center hover:shadow-[0_0_25px_2px_#F087FF] transition duration-300">
								<h1
									className={`text-[40px] ${
										item.isReversed ? "text-[#19FB9B]" : "text-[#F087FF] "
									} font-poppins`}>
									{item.ImgDescriptionStats}
								</h1>
								<p className="font-bold text-sm text-[#BABABA] font-poppins text-center">
									{item.ImgDescription.toUpperCase()}
								</p>
							</div>
							<div className="w-[300px] h-[200px] rounded-[8px] bg-[#19161C] flex justify-center items-center overflow-hidden hover:shadow-[0_0_25px_2px_#F087FF] transition duration-300">
								<img
									className="w-full h-full object-cover"
									src={item.cardImg}
									alt="image"
								/>
							</div>
						</div>
					) : (
						// SINGLE GALLERY CARD
						<div
							key={item.id}
							className="mx-3 w-[600px] h-[420px] rounded-xl transition-all overflow-hidden hover:shadow-[0_0_25px_2px_#F087FF] duration-300">
							<img
								className="w-full h-full object-cover"
								src={item.cardImg}
								alt="image"
							/>
						</div>
					)
				)}
			</ul>
		</div>
	);
};

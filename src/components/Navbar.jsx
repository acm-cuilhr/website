import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const [OpenNavbar, setOpenNavbar] = useState(false);
	const location = useLocation();

	console.log(location.pathname);

	return (
		<header>
			<motion.nav
				className="bg-black overflow-hidden"
				initial={{ height: 65 }}
				animate={OpenNavbar ? { height: 220 } : null}
				transition={{ type: "spring" }}>
				<div className="w-full h-[65px] px-5 md:px-10 lg:px-[100px] flex justify-between flex-row overflow-hidden">
					{/* WEBSITE LOGO */}
					<div className="h-[65px]">
						<img src="/logo.png" alt="" className="h-full" />
					</div>

					{/* NAVBAR ITEMS FOR TABLET AND DESKTOP RESOULTIONS */}
					<div
						className={`${
							window.innerWidth <= 480 ? "hidden" : "flex"
						} flex-row text-[#E4E4E4] font-bold items-center text-lg `}>
						<motion.div
							className={``}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring" }}>
							<Link
								className={`${
									location.pathname == "/"
										? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
										: null
								}`}
								to={"/"}>
								Home
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring" }}>
							<Link
								className={`md:ml-10 ${
									location.pathname == "/events"
										? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
										: null
								}`}
								to={"/events"}>
								Events
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring" }}>
							<Link
								className={`md:ml-10 ${
									location.pathname == "/team"
										? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
										: null
								}`}
								to={"/team"}>
								Team
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring" }}>
							<Link
								className={`md:ml-10 ${
									location.pathname == "/contributors"
										? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
										: null
								}`}
								to={"/contributors"}>
								Contributors
							</Link>
						</motion.div>
					</div>

					{/* HAMBURGER ICON */}
					<div className="flex md:hidden items-center">
						<input
							type="checkbox"
							id="checkbox"
							onClick={() => {
								setOpenNavbar(!OpenNavbar);
							}}
						/>
						<label htmlFor="checkbox" className="toggle">
							<div className="bars" id="bar1"></div>
							<div className="bars" id="bar2"></div>
							<div className="bars" id="bar3"></div>
						</label>
					</div>
				</div>

				{/* NAVBAR ITEMS FOR MOBILE RESOLUTIONS ENCLOSED BY HAMBURGER ICON */}
				<div
					className={`${
						window.innerWidth > 480 ? "hidden" : "flex"
					} flex-col text-[#E4E4E4] font-bold text-lg justify-center items-center`}>
					<motion.div
						className={``}
						whileTap={{ scale: 1.45 }}
						transition={{ type: "spring" }}>
						<Link
							className={`mt-2 ${
								location.pathname == "/"
									? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
									: null
							}`}
							to={"/"}>
							Home
						</Link>
					</motion.div>
					<motion.div
						whileTap={{ scale: 1.45 }}
						transition={{ type: "spring" }}>
						<Link
							className={`mt-2 ${
								location.pathname == "/events"
									? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
									: null
							}`}
							to={"/events"}>
							Events
						</Link>
					</motion.div>
					<motion.div
						whileTap={{ scale: 1.45 }}
						transition={{ type: "spring" }}>
						<Link
							className={`mt-2 ${
								location.pathname == "/team"
									? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
									: null
							}`}
							to={"/team"}>
							Team
						</Link>
					</motion.div>
					<motion.div
						whileTap={{ scale: 1.45 }}
						transition={{ type: "spring" }}>
						<Link
							className={`mt-2 ${
								location.pathname == "/contributors"
									? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
									: null
							}`}
							to={"/contributors"}>
							Contributors
						</Link>
					</motion.div>
				</div>
			</motion.nav>
		</header>
	);
}

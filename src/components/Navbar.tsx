"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuLink,
} from "@ui/navigation-menu";
import { Button } from "@ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);

	const routes = {
		Home: ROUTES.HOME,
		Events: ROUTES.EVENTS,
		Team: ROUTES.TEAM,
		Contributors: ROUTES.CONTRIBUTORS,
	};

	const activeClass = (path: string) =>
		pathname === path
			? "bg-clip-text text-transparent bg-gradient-to-r from-[#D471F4] to-[#6F20CE]"
			: "text-[#E4E4E4]";

	const linkClass = (path: string, extra?: string) =>
		`font-bold text-lg transition-transform duration-200 hover:scale-105 ${activeClass(
			path
		)} ${extra ?? ""}`;

	return (
		<header>
			<nav className='sticky top-0 z-50 bg-black'>
				<div className='w-full h-[65px] px-5 md:px-10 lg:px-[100px] flex justify-between items-center'>
					<div className='h-[65px]'>
						<img src='/logo_crop.png' alt='ACM' className='h-full' />
					</div>

					<div className='hidden md:flex'>
						<NavigationMenu>
							<NavigationMenuList>
								{Object.entries(routes).map(([label, href], index) => (
									<NavigationMenuItem key={href}>
										<Link href={href} passHref>
											<NavigationMenuLink
												className={linkClass(
													href,
													index > 0 ? "md:ml-10" : undefined
												)}>
												{label}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					<div className='md:hidden'>
						<Button
							variant='outline'
							size='icon'
							className='h-8 w-8 p-0'
							aria-label='Open menu'
							onClick={() => {
								setOpen(true);
								setTimeout(() => setShow(true), 10);
							}}>
							<MenuIcon className='size-5 text-[#E4E4E4]' />
						</Button>
					</div>
				</div>

				{open && (
					<div
						className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
							show ? "opacity-100" : "opacity-0"
						}`}>
						<Button
							size='icon'
							aria-label='Close menu'
							className='absolute top-4 right-4 p-2 rounded-full bg-transparent'
							onClick={() => {
								setShow(false);
								setTimeout(() => setOpen(false), 250);
							}}>
							<XIcon className='size-5 text-[#E4E4E4]' />
						</Button>
						<div className='flex h-full w-full items-center justify-center'>
							<nav className='flex flex-col items-center gap-6'>
								{Object.entries(routes).map(([label, href], idx) => (
									<Link
										key={href}
										className={`${linkClass(
											href
										)} text-2xl transform transition-all duration-300 ${
											show
												? "opacity-100 translate-y-0"
												: "opacity-0 translate-y-2"
										}`}
										style={{ transitionDelay: `${idx * 60}ms` }}
										href={href}
										onClick={() => {
											setShow(false);
											setTimeout(() => setOpen(false), 250);
										}}>
										{label}
									</Link>
								))}
							</nav>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}

"use client";
import Link from "next/link";
import { Button } from "@ui/button";
import { Separator } from "@ui/separator";

export default function Footer() {
	return (
		<footer className='bg-black flex justify-center items-center px-5 py-14 md:px-10 md:py-[80px] lg:px-[120px] lg:py-[120px]'>
			<div className='flex flex-col lg:flex-row justify-between w-full xl:w-[1300px]'>
				<div className='w-full lg:w-[50%] lg:text-start text-center'>
					<h1 className='text-[32px] md:text-[48px] font-semibold text-center lg:text-start text-white'>
						We would love to hear from you.
					</h1>
					<p className='text-[#888]  mt-14'>
						Feel free to reach us if you want to collaborate with us, or simply
						have a chat.
					</p>
					<Button
						asChild
						className='rounded-full w-[180px] h-10 bg-white text-black hover:opacity-90 mt-14 mx-auto lg:mx-0'>
						<Link href={process.env.NEXT_PUBLIC_MEMBERSHIP_FORM_URL ?? "#"}>
							<p className='font-semibold mt-[2px]'>Get Membership</p>
							<img
								className='ml-2'
								src='/assets/icons/right-arrow.svg'
								alt=''
							/>
						</Link>
					</Button>
					<p className='text-[#888]  mt-14'>
						Don&rsquo;t like the forms? Drop us a line via email.
					</p>
					<Link
						className='text-white font-semibold  cursor-pointer'
						href={`mailto:${
							process.env.NEXT_PUBLIC_ACM_CONTACT_MAIL ??
							"acmchapter@cuilahore.edu.pk"
						}`}
						target='_blank'>
						{process.env.NEXT_PUBLIC_ACM_CONTACT_MAIL ??
							"acmchapter@cuilahore.edu.pk"}
					</Link>
					<p className='mt-8  text-[#888]'>
						&copy; ACM CUI LHR {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
				<div className='w-full lg:w-[35%] md:mt-5 mt-10 lg:text-start text-center'>
					<p className='text-xl text-white font-semibold'>CONTACT US</p>
					<p className='text-[#888]  mt-7'>Our Email</p>
					<Link
						className='text-white font-semibold  cursor-pointer'
						href={`mailto:${
							process.env.NEXT_PUBLIC_ACM_CONTACT_MAIL ??
							"acmchapter@cuilahore.edu.pk"
						}`}
						target='_blank'>
						{process.env.NEXT_PUBLIC_ACM_CONTACT_MAIL ??
							"acmchapter@cuilahore.edu.pk"}
					</Link>
					<p className='text-[#888]  mt-7'>
						1.5 KM Defence Rd - off Raiwand Road - Lda Avenue Phase 1 - Lahore -
						Punjab 54000 - Pakistan
					</p>
					<Separator className='my-6 opacity-20' />
					<p className='text-xl text-white font-semibold mt-10 lg:mt-[130px]'>
						FOLLOW US
					</p>
					<div className='flex gap-4 justify-center md:justify-start items-center w-[80%] md:w-[60%] mx-auto lg:mx-0 mt-5'>
						<Link
							href={process.env.NEXT_PUBLIC_ACM_INSTAGRAM_URL ?? "#"}
							target='_blank'>
							<img
								src='/assets/icons/instagram.svg'
								alt='Instagram'
								className='w-6 h-6 md:w-8 md:h-8'
							/>
						</Link>
						<Link
							href={process.env.NEXT_PUBLIC_ACM_LINKEDIN_URL ?? "#"}
							target='_blank'>
							<img
								src='/assets/icons/linkedin.svg'
								alt='LinkedIn'
								className='w-6 h-6 md:w-8 md:h-8'
							/>
						</Link>
						<Link
							href={process.env.NEXT_PUBLIC_ACM_FACEBOOK_URL ?? "#"}
							target='_blank'>
							<img
								src='/assets/icons/facebook.svg'
								alt='Facebook'
								className='w-6 h-6 md:w-8 md:h-8'
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

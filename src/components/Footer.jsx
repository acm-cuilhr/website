import React from "react";

export default function Footer() {
	return (
		<footer class='container mx-auto px-7 px-sm-20 py-32'>
			<div class='flex flex-col md:flex-row justify-between'>
				<div class='md:w-1/2'>
					<h2 class='text-6xl font-bold mb-10'>We'd love to hear from you</h2>
					<p class='my-10 text-lg text-[#FFFFFF80]'>
						Feel free to reach out if you'd like to collaborate with us or
						simply have a chat.
					</p>
					<button class='bg-white text-[#222222] font-bold px-10 py-2 my-10 rounded-full flex items-center gap-3'>
						Get Membership
						<img src='./assets/icons/right-arrow.svg' alt='' class='mt-1' />
					</button>
					<p class='mt-4 text-[#FFFFFF80]'>
						Don't like the forms? Drop us a line via email.
					</p>
					<p class='font-semibold'>info@acmcuilhr.com</p>
					<p class='mt-8 text-sm text-[#FFFFFF80]'>
						&copy; ACM CUI LHR 2024. All rights reserved.
					</p>
				</div>
				<div class='md:w-1/4 mt-8 md:mt-0'>
					<h2 class='text-2xl font-bold mb-8'>Contact Us</h2>
					<p class='text-[#FFFFFF80]'>Our Email</p>
					<p class='mb-8'>info@acmcuilhr.com</p>
					<p class='text-[#FFFFFF80]'>Our Phone</p>
					<p class='mb-8'>+1 (234) 567-8910</p>
					<p class='mt-4 text-[#FFFFFF80]'>
						123 Main Street, Suite 456
						<br />
						Cityville, State 12345
						<br />
						Country
					</p>
					<p class='text-xl font-bold mt-8 mb-4'>Follow Us</p>
					<div class='flex justify-between space-x-4'>
						<a href='#'>
							<img
								src='./assets/icons/Dribbble.svg'
								alt='Dribbble'
								width='20'
								height='20'
							/>
						</a>
						<a href='#'>
							<img
								src='./assets/icons/Behance.svg'
								alt='Behance'
								width='30'
								height='30'
							/>
						</a>
						<a href='#'>
							<img
								src='./assets/icons/Insta.svg'
								alt='Instagram'
								width='20'
								height='20'
							/>
						</a>
						<a href='#'>
							<img
								src='./assets/icons/Twitter X.png'
								alt='X'
								width='20'
								height='20'
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

import React from 'react'
import { motion } from 'framer-motion'

export default function ContributorsHeroSection() {
    return (
        <section className='h-[70vh] lg:h-screen bg-[url("/assets/GallerybgImg.png")] bg-no-repeat bg-cover bg-center flex flex-col items-center px-5 md:px-10 lg:px-0'>

            <motion.div className="mt-[20vh]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.8 }}
            >

                {/* ACM HEADING */}
                <div className="flex items-center flex-col">
                    <h1 className='italic text-[24px] md:text-[50px] text-white'>Our</h1>
                    <h1 className='text-[42px] md:text-[90px] lg:text-[158px] font-semibold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#56B4F0] via-[#F9C0CF] to-[#8B9BEC]'>CONTRIBUTORS</h1>
                </div>

                {/* TEXT */}
                <div className="text-white font-light md:text-xl lg:text-4xl tracking-widest text-center mt-5">
                    THE CREATORS BEHIND EVERY PIXEL AND LINE OF CODE
                </div>
            </motion.div>

        </section>
    )
}

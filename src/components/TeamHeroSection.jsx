import React from 'react'
import { motion } from 'framer-motion'

export default function TeamHeroSection() {
    return (
        <section className='h-screen bg-[url("/assets/GallerybgImg.png")] bg-no-repeat bg-cover bg-center flex flex-col items-center px-5 md:px-10 lg:px-0'>

            <motion.div className="mt-[15vh] md:mt-[25vh]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.8 }}
            >

                {/* ACM HEADING */}
                <div className="flex items-center flex-col lg:flex-row">
                    <h1 className='text-[100px] md:text-[178px] font-semibold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#56B4F0] via-[#F9C0CF] to-[#8B9BEC]'>MEET</h1>
                    <h1 className='italic text-[50px] text-white'>the</h1>
                    <h1 className='text-[100px] md:text-[178px] font-semibold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#56B4F0] via-[#F9C0CF] to-[#8B9BEC]'>TEAM</h1>
                </div>

                {/* TEXT */}
                <div className="text-white font-light text-2xl md:text-4xl tracking-widest text-center mt-5">
                    RESPONSIBLE FOR MAKING THE MAGIC HAPPEN
                </div>

            </motion.div>

        </section>
    )
}

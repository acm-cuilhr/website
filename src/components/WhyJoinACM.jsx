import React from 'react'
import { motion } from 'framer-motion'

export default function WhyJoinACM() {
    return (
        <div
            className="flex flex-col lg:flex-row lg:justify-between mt-[150px] w-full 2xl:w-[1300px]">
            <div className="lg:w-[30%] lg:h-full">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring' }}
                    className="text-center text-white lg:text-start text-[32px] md:text-[48px] font-bold font-poppins mt-2">
                    Why to join ACM?
                </motion.h1>
            </div>
            <div
                className="lg:w-[70%] lg:h-full flex items-center flex-col md:flex-row mt-5 lg:mt-0">
                <div className="md:w-[50%] h-full sm:mt-[100px]">
                    <div className="w-full h-[50%] p-5">
                        <motion.div className="border-l-4 border-l-[#1FCFF1] overflow-hidden"
                            layout
                            initial={{ width: 4 }}
                            whileInView={{ width: 'fit-content' }}
                            transition={{ type: 'spring', duration: 1 }}
                        >
                            <motion.h1 className="text-2xl md:text-3xl font-bold ml-3 text-white"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ type: 'spring', duration: 1 }}
                            >Exclusive Tech Competitions</motion.h1>
                        </motion.div>
                        <motion.p className="mt-3 text-[#C4C4C4] md:text-lg"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', duration: 1 }}
                        >
                            Participate in coding contests, hackathons, and innovative competitions to test and enhance your technical skills.
                        </motion.p>
                    </div>
                    <div className="w-full h-[50%] p-5 md:mt-20">
                        <motion.div className="border-l-4 border-l-[#9945FF] overflow-hidden"
                            layout
                            initial={{ width: 4 }}
                            whileInView={{ width: 'fit-content' }}
                            transition={{ type: 'spring', duration: 1 }}
                        >
                            <motion.h1 className="text-2xl md:text-3xl font-bold ml-3 text-white"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ type: 'spring', duration: 1 }}
                            >Workshops & Learning Sessions</motion.h1>
                        </motion.div>
                        <motion.p className="mt-3 text-[#C4C4C4] md:text-lg"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', duration: 1 }}
                        >
                            Gain hands-on experience through expert-led workshops, seminars, and training sessions on the latest technologies.
                        </motion.p>
                    </div>
                </div>
                <div className="md:w-[50%] h-full">
                    <div className="w-full h-[50%] p-5">
                        <motion.div className="border-l-4 border-l-[#FFD512] overflow-hidden"
                            layout
                            initial={{ width: 4 }}
                            whileInView={{ width: 'fit-content' }}
                            transition={{ type: 'spring', duration: 1 }}
                        >
                            d<motion.h1 className="text-2xl md:text-3xl font-bold ml-3 text-white"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ type: 'spring', duration: 1 }}
                            >Networking & Career Growth</motion.h1>
                        </motion.div>
                        <motion.p className="mt-3 text-[#C4C4C4] md:text-lg"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', duration: 1 }}
                        >
                            Connect with industry professionals, alumni, and like-minded peers to expand your professional network and career opportunities.
                        </motion.p>
                    </div>
                    <div className="w-full h-[50%] p-5 md:mt-20">
                        <motion.div className="border-l-4 border-l-[#19FB9B] overflow-hidden"
                            layout
                            initial={{ width: 4 }}
                            whileInView={{ width: 'fit-content' }}
                            transition={{ type: 'spring', duration: 1 }}
                        >
                            <motion.h1 className="text-2xl md:text-3xl font-bold ml-3 text-white"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ type: 'spring', duration: 0.1 }}
                            >Leadership & Teamwork Experience</motion.h1>
                        </motion.div>
                        <motion.p className="mt-3 text-[#C4C4C4] md:text-lg"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', duration: 1 }}
                        >
                            Take on leadership roles, collaborate on projects, and contribute to ACM initiatives to build essential teamwork and management skills.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

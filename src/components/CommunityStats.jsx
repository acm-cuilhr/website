import React from 'react'
import StatsItem from './StatsItem';
import { motion } from 'framer-motion';

export default function CommunityStats() {

    return (
        <div
            className="flex flex-col lg:flex-row justify-between h-full w-full 2xl:w-[1300px]">
            <div className="lg:w-[70%] lg:h-full">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring' }}

                    className="lg:w-[60%] text-center text-white lg:text-start text-[32px] md:text-[48px] font-bold font-poppins mt-2">
                    Join a community of students
                </motion.h1>
            </div>
            <div
                className="lg:w-[30%] h-full flex items-center flex-col mt-5 lg:mt-0 stats">
                <StatsItem number={1000} suffix="+" text={["TOTAL", "MEMBERS"]} gradient='bg-gradient-to-r from-[#F087FF] to-[#6E1FCE]' />
                <StatsItem number={90} suffix="%" text={["ACTIVE", "MEMBERS"]} gradient='bg-gradient-to-r from-[#1FCFF1] via-[#1FCFF1] to-[#234CB6]' />
                <StatsItem number={70} suffix="%" text={["YEARLY GROWTH RATE"]} gradient='bg-gradient-to-r from-[#19FB9B] via-[#199890] to-[#005F59]' />
            </div>
        </div>
    )
}

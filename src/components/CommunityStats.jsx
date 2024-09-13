import React from 'react'

export default function CommunityStats() {
    return (
        <div
            className="flex flex-col lg:flex-row justify-between h-full w-full 2xl:w-[1300px]">
            <div className="lg:w-[70%] lg:h-full">
                <h1
                    className="lg:w-[60%] text-center text-white lg:text-start text-[32px] md:text-[48px] font-bold font-poppins mt-2">
                    Join a community of students
                </h1>
            </div>
            <div
                className="lg:w-[30%] h-full flex items-center flex-col mt-5 lg:mt-0 stats">
                <div
                    className="w-full flex flex-col justify-center items-center lg:block">
                    <h1
                        className="text-[98px] font-medium font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#F087FF] to-[#6E1FCE]"
                        id="totalmembers">
                        1k+
                    </h1>
                    <p className="text-[#C4C4C4] text-lg">TOTAL</p>
                    <p className="text-[#C4C4C4] text-lg">MEMBERS</p>
                </div>
                <div
                    className="w-full flex flex-col justify-center items-center lg:block">
                    <h1
                        className="text-[98px] font-medium font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#1FCFF1] via-[#1FCFF1] to-[#234CB6]"
                        id="activemembers">
                        90%
                    </h1>
                    <p className="text-[#C4C4C4] text-lg">ACTIVE</p>
                    <p className="text-[#C4C4C4] text-lg">MEMBERS</p>
                </div>
                <div
                    className="w-full flex flex-col justify-center items-center lg:block">
                    <h1
                        className="text-[98px] font-medium font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#19FB9B] via-[#199890] to-[#005F59]"
                        id="growthrate">
                        70%
                    </h1>
                    <p className="text-[#C4C4C4] text-lg">YEARLY GROWTH RATE</p>
                </div>
            </div>
        </div>
    )
}

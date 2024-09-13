import React from 'react'

export default function WhyJoinACM() {
    return (
        <div
            className="flex flex-col lg:flex-row lg:justify-between mt-[150px] w-full 2xl:w-[1300px]">
            <div className="lg:w-[30%] lg:h-full">
                <h1
                    className="text-center text-white lg:text-start text-[32px] md:text-[48px] font-bold font-poppins mt-2">
                    Why to join ACM?
                </h1>
            </div>
            <div
                className="lg:w-[70%] lg:h-full flex items-center flex-col md:flex-row mt-5 lg:mt-0">
                <div className="md:w-[50%] h-full sm:mt-[100px]">
                    <div className="w-full h-[50%] p-5">
                        <div className="border-l-4 border-l-[#1FCFF1]">
                            <h1 className="text-2xl md:text-3xl font-bold ml-3 text-white">Fast</h1>
                        </div>
                        <p className="mt-3 text-[#C4C4C4] md:text-lg">
                            Don’t keep your users waiting. Solana has block times of 400
                            milliseconds — and as hardware gets faster, so will the network.
                        </p>
                    </div>
                    <div className="w-full h-[50%] p-5 md:mt-20">
                        <div className="border-l-4 border-l-[#9945FF]">
                            <h1 className="text-2xl md:text-3xl font-bold ml-3 text-white">Scalable</h1>
                        </div>
                        <p className="mt-3 text-[#C4C4C4] md:text-lg">
                            Get big, quick. Solana is made to handle thousands of
                            transactions per second, and fees for both developers and users
                            remain less than $0.0025.
                        </p>
                    </div>
                </div>
                <div className="md:w-[50%] h-full">
                    <div className="w-full h-[50%] p-5">
                        <div className="border-l-4 border-l-[#FFD512]">
                            <h1 className="text-2xl md:text-3xl font-bold ml-3 text-white">Decentralized</h1>
                        </div>
                        <p className="mt-3 text-[#C4C4C4] md:text-lg">
                            The Solana network is validated by thousands of nodes that
                            operate independently of each other, ensuring your data remains
                            secure and censorship resistant.
                        </p>
                    </div>
                    <div className="w-full h-[50%] p-5 md:mt-20">
                        <div className="border-l-4 border-l-[#19FB9B]">
                            <h1 className="text-2xl md:text-3xl font-bold ml-3 text-white">Energy Efficient</h1>
                        </div>
                        <p className="mt-3 text-[#C4C4C4] md:text-lg">
                            Solana’s proof of stake network and other innovations minimize
                            its impact on the environment. Each Solana transaction uses
                            about the same energy as a few Google searches.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

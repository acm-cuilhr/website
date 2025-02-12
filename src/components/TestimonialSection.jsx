import React from 'react'
import TestimonialCard from './TestimonialCard'
import { motion } from 'framer-motion'

const TestimonialSection = (props) => {

    const { TestimonialData } = props

    return (
        <section className='bg-black p-5 py-10 md:px-10 md:py-[80px] lg:px-[120px] lg:py-[80px] flex justify-center items-center'>
            <div className="flex flex-col xl:w-[1300px] mt-10 lg:mt-0">

                {/* TITLE & DESCRIPTION */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 50, opacity: 1 }}
                    transition={{ type: 'spring' }}
                >
                    <h1 className='text-white text-[32px] md:text-[48px] font-bold font-poppins text-center lg:text-start'>Words from Our</h1>
                    <h1 className='text-white text-[32px] md:text-[48px] font-bold font-poppins flex flex-col lg:flex-row lg:mt-[-15px] text-center lg:text-start'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#E64467] to-[#7E5CC5]'>Pioneers.</span>
                    </h1>
                </motion.div>
                {/* <motion.div className="lg:w-[50%] mt-5 lg:mt-0"
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}

                >
                    <p className='md:text-lg text-[#C6C6C6] text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </motion.div> */}

                {/* TESTIMONIAL CARDS */}
                <div className="w-full xl:w-[1300px] flex flex-wrap flex-row gap-8 items-center justify-center">
                    {
                        TestimonialData.map((testimonial, index) => {
                            return <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo(TestimonialSection)
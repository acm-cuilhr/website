import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = (props) => {

    const { TestimonialData } = props

    return (
        <section className='bg-black p-5 md:p-10 lg:p-[120px] flex justify-center items-center'>
            <div className="flex flex-col xl:w-[1300px] mt-10 lg:mt-0">

                {/* TITLE & DESCRIPTION */}
                <h1 className='text-white text-[32px] md:text-[48px] font-bold font-poppins text-center lg:text-start'>Testimonials.</h1>
                <h1 className='text-white text-[26px] md:text-[38px] font-bold font-poppins flex flex-col lg:flex-row lg:mt-[-15px] text-center lg:text-start'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#E64467] to-[#7E5CC5]'>Loved</span>&nbsp;by ex members.
                </h1>
                <div className="lg:w-[50%] mt-5 lg:mt-0">
                    <p className='md:text-lg text-[#C6C6C6] text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                {/* TESTIMONIAL CARDS */}
                <div className="w-full mt-[80px] lg:mt-[8vh] flex flex-col lg:flex-row items-center lg:justify-between flex-wrap">
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
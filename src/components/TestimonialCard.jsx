import React from 'react'

export default function TestimonialCard(props) {

    const { id, profileURL, name, profession, remarks } = props.testimonial

    return (
        <div className="bg-[#161E25] w-[100%] lg:w-[32%] flex flex-col items-center p-6 pt-[100px] rounded-2xl relative mt-[100px]">

            {/* PROFILE IMAGE */}
            <div className="w-[120px] h-[120px] overflow-hidden rounded-full absolute top-[-60px]">
                <img src={profileURL} alt="" className='w-full h-full object-cover' />
            </div>

            <img src="./assets/Comma.svg" alt="" />
            <p className='font-semibold text-white text-xl text-center mt-6'>{remarks}</p>
            <h1 className='text-xl text-[#C6C6C6] font-bold mt-5'>{name}</h1>
            <p className='text-lg text-[#C6C6C6]'>{profession}</p>
        </div>
    )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function ContributorCard(props) {

    const { id, avatar_url, html_url, url, login, contributions } = props.contributor

    return (
        <motion.div className='w-[300px] h-[300px]'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
        >
            <div className="w-full h-full flex flex-col items-center">

                {/* MEMBER IMAGE CONTAINER */}
                <div className="h-[160px] w-[160px] rounded-full overflow-hidden">
                    <img className='h-full w-full object-cover' src={avatar_url} alt="" />
                </div>

                {/* MEMBER POSITION */}
                <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#E64467] to-[#7E5CC5] font-bold text-2xl mt-6'>{login}</h1>

                {/* MEMBER NAME */}
                <h1 className='font-semibold text-white mt-1'>{`${contributions} ${contributions <= 1 ? 'Contribution' : 'Contributions'}`}</h1>

                {/* MEMBER SOCIAL LINKS */}
                <div className="flex flex-row items-center mt-1 mx-auto">
                    <a className='ml-2 mr-2' href={html_url} target='_blank'>
                        <i class="fa-brands fa-github text-2xl text-[#888]"></i>
                    </a>
                </div>

            </div>
        </motion.div>
    )
}

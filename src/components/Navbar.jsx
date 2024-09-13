import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [OpenNavbar, setOpenNavbar] = useState(false)

    return (
        <header>
            <motion.nav
                className='bg-black overflow-hidden'
                initial={{ height: 65 }}
                animate={OpenNavbar ? { height: 220 } : null}
                transition={{ type: 'spring' }}
            >
                <div className="w-full h-[65px] px-5 md:px-10 lg:px-[100px] flex justify-between flex-row overflow-hidden">

                    {/* WEBSITE LOGO */}
                    <div className="h-[65px]">
                        <img src='/logo.png' alt="" className='h-full' />
                    </div>

                    {/* NAVBAR ITEMS FOR TABLET AND DESKTOP RESOULTIONS */}
                    <div className={`${window.innerWidth <= 480 ? 'hidden' : 'flex'} flex-row text-[#E4E4E4] font-bold items-center text-lg `}>
                        <Link className="" to={'/'}>Home</Link>
                        <Link className="md:ml-10" to={'/events'}>Events</Link>
                        <Link className="md:ml-10" to={'/team'}>Team</Link>
                        <Link className="md:ml-10" to={'/contributors'}>Contributors</Link>
                    </div>

                    {/* HAMBURGER ICON */}
                    <div className="flex md:hidden items-center">
                        <input type="checkbox" id="checkbox" onClick={() => { setOpenNavbar(!OpenNavbar) }} />
                        <label htmlFor="checkbox" className="toggle">
                            <div className="bars" id="bar1"></div>
                            <div className="bars" id="bar2"></div>
                            <div className="bars" id="bar3"></div>
                        </label>
                    </div>

                </div>

                {/* NAVBAR ITEMS FOR MOBILE RESOLUTIONS ENCLOSED BY HAMBURGER ICON */}
                <div className={`${window.innerWidth > 480 ? 'hidden' : 'flex'} flex-col text-[#E4E4E4] font-bold text-lg justify-center items-center`}>
                    <Link className="mt-2" to={'/'}>Home</Link>
                    <Link className="mt-2" to={'/events'}>Events</Link>
                    <Link className="mt-2" to={'/team'}>Team</Link>
                    <Link className="mt-2" to={'/contributors'}>Contributors</Link>
                </div>

            </motion.nav>
        </header>
    )
}

export default React.memo(Navbar)

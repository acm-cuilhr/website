import React from 'react'

export default function SliderItem(props) {

    const { id, eventName, description, eventImage } = props.item

    return (
        <div className="justify-center items-center flex px-3 md:px-[45px] select-none">
            <div className="bg-[#1B1622] w-full lg:h-[380px] rounded-[16px] p-4 lg:p-[40px] flex flex-col lg:flex-row justify-between">

                {/* <!-- SLIDER IMAGE CONTAINER --> */}
                <div className="w-full lg:w-[40%] h-[40%] lg:h-full overflow-hidden rounded-[5px]">
                    <img className="h-full w-full object-cover" src={eventImage} alt="Image" />
                </div>

                {/* <!-- SLIDER TEXT CONTAINER --> */}
                <div className="h-[50%] lg:h-full w-full lg:w-[60%] flex items-center justify-between px-0 lg:px-10 flex-col mt-5 lg:mt-0">

                    {/* <!-- EVENTS & SEMINARS --> */}
                    <div className="bg-gradient-to-r from-[#14F195] via-[#80ECFF] via-[#64A8F2] to-[#64A8F2] font-poppins font-bold text-black flex justify-center items-center py-1 px-2 md:py-2 md:px-3 rounded-full text-[12px] lg:text-[16px] text-center">
                        OUR EVENTS & SEMINARS
                    </div>

                    {/* <!-- EVENT NAME AND DESCRIPTION --> */}
                    <div>
                        <h1 className="font-poppins text-[28px] md:text-[46px] leading-none font-bold text-[#CCCCCC] text-center mt-5 lg:mt-0">
                            {eventName}
                        </h1>
                        <p className="text-center text-[#C6C6C6] mt-2">
                            {description.slice(0, 140)} .....
                        </p>
                    </div>

                    {/* <!-- EXPLORE MORE BUTTON --> */}
                    <button className="border-2 border-white text-white px-2 py-1 md:px-3 md:py-2 rounded-full mt-3 lg:mt-0 hover:shadow-[0_0_15px_2px_#F087FF]">
                        EXPLORE MORE
                    </button>
                </div>
            </div>
        </div>
    )
}

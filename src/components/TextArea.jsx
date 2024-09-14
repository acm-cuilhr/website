import React from 'react'


const TextArea = (props) => {

    // FUNCTIONS

    function validate(reg, string) {
        const regex = reg
        return regex.test(string)
    }

    // VARIABLES

    const { icon, placeholder, inputType, regex, text, error, seterror, formInteraction, errorStatement } = props

    // CODE

    return (
        <div className="mb-4 w-full flex flex-col">
            <div className="w-full p-2 flex flex-row h-[155px] bg-black rounded-xl">
                <div className="flex justify-center items-start pt-2 h-full w-[8%] overflow-hidden ml-1">
                    <img src={icon} alt="" />
                </div>
                <textarea
                    className='w-[90%] h-full pt-2 text-white bg-transparent font-poppins px-3 outline-none resize-none'
                    type={inputType}
                    placeholder={placeholder}
                    onChange={(e) => {
                        text.current = e.target.value
                        formInteraction.current ? null : formInteraction.current = true
                        validate(regex, e.target.value) ? seterror(false) : seterror(true)
                    }}
                ></textarea>
            </div>
            {
                error ?
                    <div className='w-full text-[#ff0000] font-light mt-1 ml-4 flex-row items-center flex'>
                        <i className="fa-solid fa-triangle-exclamation text-[#ff0000] mr-2"></i>
                        {errorStatement}
                    </div> : null
            }
        </div>
    )
}

export default React.memo(TextArea)

import React, { useRef, useState } from 'react'
import FormInput from './FormInput'
import TextArea from './TextArea'

export default function ContactFormSection() {

    // FUNCTION

    function handleSubmit() {
        const formData = {
            name: fullName.current,
            email: emailAddress.current,
            phone: phoneNumber.current,
            message: message.current
        }
        console.log(formData)
    }

    function checkForm() {
        // logic to handle button disability upon invalid input on contact form
        // button will remain disabled until the user inputs valid information
        if (formInteraction.current) {
            if (fullNameError || emailAddressError || phoneNumberError || messageError) {
                return true
            } else {
                if (fullName.current == '' || emailAddress.current == '' || phoneNumber.current == '' || message.current == '') {
                    return true
                } else {
                    return false
                }
            }
        } else {
            return true
        }
    }

    // VARIABLES & STATES

    const formInteraction = useRef(false)
    const fullName = useRef('')
    const emailAddress = useRef('')
    const phoneNumber = useRef('')
    const message = useRef('')
    const [fullNameError, setfullNameError] = useState(false)
    const [emailAddressError, setemailAddressError] = useState(false)
    const [phoneNumberError, setphoneNumberError] = useState(false)
    const [messageError, setmessageError] = useState(false)
    let disableButton = checkForm()

    // CODE


    return (
        <section className='bg-[#1B1622] p-5 md:p-10 lg:p-[120px] py-10 flex justify-center items-center'>
            <div className="flex flex-col w-full xl:w-[1300px]">

                {/* HEADING */}
                <div className="flex flex-col mt-10 lg:mt-0">
                    <h1 className="font-poppins text-[32px] md:text-[48px] font-bold text-center lg:text-start text-white">Get in Touch with our <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#D471F4] to-[#6F20CE]'>Team</span>.</h1>
                </div>

                {/* FORM CONTAINER */}
                <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between mt-14">

                    {/* FORM */}
                    <div className="flex flex-col w-full mt-5 lg:mt-0 lg:w-[48%]">

                        <FormInput
                            icon='./assets/icons/user.svg'
                            placeholder='Full Name'
                            inputType='text'
                            regex={/^[a-zA-Z][a-zA-Z-' ]{2,}$/}
                            text={fullName}
                            error={fullNameError}
                            seterror={setfullNameError}
                            formInteraction={formInteraction}
                            errorStatement="Please enter a valid name"
                        />
                        <FormInput
                            icon='./assets/icons/mail.svg'
                            placeholder='Email Address'
                            inputType='email'
                            regex={/^[a-zA-Z0-9._%+-]+@gmail\.com$/}
                            text={emailAddress}
                            error={emailAddressError}
                            seterror={setemailAddressError}
                            formInteraction={formInteraction}
                            errorStatement="Please enter a valid email address"
                        />
                        <FormInput
                            icon='./assets/icons/phone.svg'
                            placeholder='Phone Number'
                            inputType='number'
                            regex={/^03\d{9}$/}
                            text={phoneNumber}
                            error={phoneNumberError}
                            seterror={setphoneNumberError}
                            formInteraction={formInteraction}
                            errorStatement="Please enter a phone number"
                        />
                        <TextArea
                            icon='./assets/icons/chat.svg'
                            placeholder='Write something here'
                            inputType='text'
                            regex={/^.{2,}$/}
                            textarea={true}
                            text={message}
                            error={messageError}
                            seterror={setmessageError}
                            formInteraction={formInteraction}
                            errorStatement="Message should not be less that two characters"
                        />

                        <div className="w-full flex justify-start mt-4">
                            <button
                                className={`rounded-full w-[140px] md:w-[160px] h-10 md:h-12 ml-1 bg-gradient-to-r from-[#F087FF] via-[#6E1FCE] to-[#6E1FCE33] text-white ${disableButton ? 'opacity-50' : 'hover:shadow-[0_0_15px_2px_#F087FF]'}`}
                                disabled={disableButton}
                                onClick={handleSubmit}
                            >SUBMIT NOW</button>
                        </div>

                    </div>

                    {/* IMAGE */}
                    <div className="w-full lg:w-[48%] h-[400px] overflow-hidden rounded-xl relative">
                        <img className='w-full h-full object-cover' src="./assets/contact-form-img.png" alt="" />
                        <div className="absolute bottom-10 px-10 w-full flex justify-center items-center">
                            <span className='text-center text-2xl font-bold text-white'>“Transforming the technical into thrilling adventures”</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

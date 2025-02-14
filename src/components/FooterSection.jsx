import { footer } from "framer-motion/client";
import React from "react";

export default function FooterSection() {
  return (
    <footer className="bg-black flex justify-center items-center px-5 py-14 md:px-10 md:py-[80px] lg:px-[120px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row justify-between w-full xl:w-[1300px]">
        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[50%] lg:text-start text-center">
          <h1 className="font-poppins text-[32px] md:text-[48px] font-semibold text-center lg:text-start text-white">
            We would love to hear from you.
          </h1>

          <p className="text-[#888]  mt-14">
            Feel free to reach us if you want to collaborate with us, or simply
            have a chat.
          </p>

          <button className="rounded-full w-[180px] h-10 bg-white flex justify-center items-center mt-14 mx-auto lg:mx-0">
            <p className="font-semibold mt-[2px]">Get Membership</p>
            <img className="ml-2" src="/assets/icons/right-arrow.svg" alt="" />
          </button>

          <p className="text-[#888]  mt-14">
            Don't like the forms? Drop us a line via email.
          </p>
          <a
            className="text-white font-semibold  cursor-pointer"
            href="#"
            target="_blank"
          >
            info@acm.com
          </a>

          <p class="mt-8  text-[#888]">
            &copy; ACM CUI LHR {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[35%] md:mt-5 mt-10 lg:text-start text-center">
          <h1 className="text-xl text-white font-semibold">CONTACT US</h1>

          <p className="text-[#888]  mt-7">Our Email</p>
          <a
            className="text-white font-semibold  cursor-pointer"
            href="#"
            target="_blank"
          >
            acmchapter@cuilahore.edu.pk
          </a>

          <p className="text-[#888]  mt-7">
            1.5 KM Defence Rd - off Raiwand Road - Lda Avenue Phase 1 Lda Avenue
            - Lahore - Punjab 54000 - Pakistan
          </p>

          <h1 className="text-xl text-white font-semibold mt-10 lg:mt-[130px]">
            FOLLOW US
          </h1>
          <div className="flex gap-4 items-center w-[80%] md:w-[60%] mx-auto lg:mx-0 mt-5">
            <a href="https://www.instagram.com/acm.cuilhr/" target="_blank">
              <img
                src="/assets/icons/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
            <a href="https://www.linkedin.com/company/acmcuilhr/" target="_blank">
              <img
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
            <a href="https://www.facebook.com/acmcuilhr" target="_blank">
              <img
                src="/assets/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

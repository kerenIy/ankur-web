import React from "react";

export default function Footer() {
  return (
    <div className="footer px-[3%] py-[2.5%] md:px-[6%] md:py-[5%]">
      <div
        className="text-white md:flex justify-between items-center"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <p className="font-[500] md:font-[700] text-[20.9px] md:text-[45px] leading-[57.88px]">
          Making Possibilities Happen
        </p>

        <div className="w-[2px] h-[428px] bg-[white] hidden md:block"></div>

        <div className="">
          <div className="">
            <p className="text-[8px] md:text-[17.81px] font-[500] md:font-[700]">
              E-MAIL
            </p>

            <p className="text-[14.58px] md:text-[32.17px] ">
              <a href="mailto:contact@ankursolutions.com">
                contact@ankursolutions.com
              </a>
            </p>
          </div>

          <br />

          <div className="">
            <p className="text-[8px] md:text-[17.81px] font-[500] md:font-[700]">
              PHONE NUMBER
            </p>
            <p className="text-[14.58px] md:text-[32.17px] ">
              +234 (0) 123 456 78910
            </p>
          </div>
        </div>
      </div>

      <hr className="border-[1.1px] border-white my-[15px] md:my-[25px]" />

      <div className="text-white flex justify-between items-center">
        <p className="text-[7.55px] md:text-[18.44px] font-[400]">
          @Ankur Global Limited 2024
        </p>
        <p className="text-[6.05px] md:text-[14.75px] font-[700]">
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}

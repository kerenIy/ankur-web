import React from "react";
import Image from "next/image";

import Link from "next/link";

export default function Header() {
  return (
    <div
      data-aos="fade-up"
      className="text-white text-center mt-[75px] md:mt-[150px] mx-[3.5%] md:mx-[9%]"
    >
      <div className="hidden md:flex justify-center items-center">
        <Image src="/ankur-logo.svg" alt="Logo" width={50} height={100} />
      </div>

      <div className="flex md:hidden justify-center items-center">
        <Image src="/ankur-logo.svg" alt="Logo" width={27} height={53} />
      </div>

      <p className="text-[33.78px] md:text-[80px]">Unlimited solutions</p>
      <p className="md:tracking-[2.7px] leading-[40.48px] md:leading-[101.59px] text-[33.78px] md:text-[80px]">
        Limitless possibilities
      </p>
      <div className="flex justify-center items-center my-[7px]">
        <p className="text-[#FFFFFF80] text-center text-[15.09px] md:text-[25px] font-[300] w-[1030px]">
          Transformation-Driven Solutions for Business Efficiency, Exceptional
          Delivery, Sustainablity , Growth , innovation impact and purpose{" "}
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="text-white text-[12px] md:text-[18px] flex justify-between items-center md:w-[300px] w-[224px] mt-[15px]">
          <button className="button-gradient border-[1px] border-[#FFFFFF0D] rounded-[18px] p-[12px]">
            <Link href="/processes">See our Process</Link>
          </button>
          <button className="button-gradient border-[1px] border-[#FFFFFF0D] rounded-[18px] p-[12px]">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
}

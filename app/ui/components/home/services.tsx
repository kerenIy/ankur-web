"use client";

import React, { useState, useEffect } from "react";
import { services } from "@/app/utils/data";
import Image from "next/image";

export default function Services() {
  const servicesToShow = 4;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const circularServices = [...services, ...services.slice(0, servicesToShow)];

  return (
    <>
      <br />
      <div
        data-aos="fade-up"
        data-aos-once="false"
        className="mx-[3%] md:m-[7%] md:flex justify-between items-center relative"
      >
        <div className="services w-[350px] md:w-[460px] rounded-[17px] p-[10px] md:p-[1%] flex justify-center items-center">
          <div>
            <p className="font-[400] text-[19px] text-[#FFFFFF80]">
              Our Services
            </p>
            <div className="overflow-hidden relative h-[221px] md:h-[384px]">
              {" "}
              <div
                className="transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateY(-${
                    startIndex * (192 / servicesToShow)
                  }px)`,
                }}
              >
                {circularServices.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFFFF08] border-[1.1px] border-[#FFFFFF0D] text-[#FFFFFF80] text-[16.4px] font-[400] rounded-[11px] p-[10px] md:p-[1%] my-[7px] w-[305px] md:w-[415px] h-[59.18px] flex items-center justify-start"
                  >
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#007BFF] hidden md:inline w-[610px] h-[4px] connector"></div>

        <div className="hidden md:inline session-double p-[2%] rounded-[20px] border-[1.1px] border-[#FFFFFF0D] w-[460px] h-[384px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src={"/live.svg"} alt="Logo" width={50} height={30} />

              <p className="text-[#FFFFFF80] text-[18px] ml-[7px]">
                yourbrand.com
              </p>
            </div>

            <Image src={"/logo-text.svg"} alt="Logo" width={50} height={30} />
          </div>
        </div>

        <div className="hidden ankur-logo-blur w-[93.17px] h-[93.17px] rounded-full p-[1.5%] md:flex justify-center items-center absolute left-[50%]">
          <Image
            src={"/logo-white.svg"}
            alt="Logo"
            width={28.5}
            height={55.9}
          />
        </div>
      </div>

      <div className="mt-5 md:mt-0 flex justify-center items-center">
        <button className="learn-more rounded-[31px] border-[2.21px] border-[#FFFFFF0D] text-[#FFFFFF80] font-[400] text-[13.5px] md:text-[28px] p-[1.4%] md:p-[1%] w-[200px] md:w-[441px]">
          {" "}
          Learn More
        </button>
      </div>
    </>
  );
}

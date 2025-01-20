import React from "react";
import Image from "next/image";

import { cards } from "@/app/utils/data";

export default function Carosel() {
  return (
    <div data-aos="fade-up" data-aos-once="false">
      <div className="my-[12%]">
        <div className=" flex justify-center items-center py-[7%] mx-[3.5%] md:mx-[9%]">
          <div>
            <div className="">
              <p className="text-[30.13px] md:text-[57.54px] text-center text-white font-[400] md:ml-[5%]">
                Who we are at{" "}
                <span className="text-[#007BFF]">
                  Ankur{" "}
                  <Image
                    src="/logo-outline.svg"
                    alt="Logo"
                    width={28.5}
                    height={55.92}
                    className="ml-1 hidden md:inline"
                  />
                </span>{" "}
              </p>
            </div>

            <p className="text-[#FFFFFF80] text-[13.3px] md:text-[27.56px] font-[300] leading-[25.2px] md:leading-[45.47px] text-center w-[346.32px] md:w-[979px] my-[15px]">
              Ankur was born from a vision to transform Africa through
              technology. We aim to solve pressing challenges through innovative
              technology and creativity delivered to individuals, businesses and
              industries.
            </p>
          </div>
        </div>

        <p className="text-center text-white font-[500] text-[16.59px] md:text-[41px] mb-4 mx-[2%] md:mx-[0]">
          We are more than just a Tech company we are:
        </p>

        <div
          className="carosel-container mt-[20px]"
          data-aos="fade-left"
          data-aos-once="false"
        >
          {cards?.map((card) => (
            <>
              <div
                className="carosel-card rounded-[6px] md:rounded-[12px] border-[1px]  border-[#484848] flex justify-between items-center w-[286.43px] md:w-[563px] h-[124px] md:h-[250px] p-[10px]"
                key={card.id}
              >
                <div className="carosel-icon border-[1.45px]  border-[#FFFFFF0D] w-[58.6px] md:w-[122px] h-[58.6px] md:h-[122px] rounded-full flex justify-center items-center">
                  <Image
                    src={card?.icon}
                    alt={card?.title}
                    width={100}
                    height={150}
                    className="hidden md:block"
                  />
                  <Image
                    src={card?.icon}
                    alt={card?.title}
                    width={50}
                    height={100}
                    className="md:hidden flex"
                  />
                </div>
                <div className="md:h-[145.7px]">
                  <p className="text-[#FCFCFC] text-[12.79px] md:text-[27px] md:w-[375px] font-[400] md:font-[600] ">
                    {card?.title}
                  </p>
                  <p className="text-[#FFFFFF80] font-[300] md:text-[22.17px] w-[182.93px] md:w-[370px] text-[10.59px]">
                    {card?.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

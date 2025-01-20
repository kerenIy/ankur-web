import { processes, subprocesses } from "@/app/utils/data";
import React from "react";

export default function Processes() {
  return (
    <div
      className="my-[15%] md:my-[20%] mx-[3.5%] md:mx-[9%] flex justify-center items-center"
      data-aos="fade-up"
      data-aos-once="false"
    >
      <div className="">
        <p className="text-[#FFFFFF] text-[29.7px] md:text-[47.2px] text-center">
          With our proven processes in record time
        </p>
        <p className="text-[15.4px] md:text-[25.54px] text-[#FFFFFF80] text-center font-[300]">
          Get in touch with us and unlock limitless potentials
        </p>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-[2%] md:w-[766px]">
            {processes?.map((item) => (
              <>
                <div
                  className={`flex items-center justify-center bg-[#FFFFFF12] rounded-[30.15px] px-[4px] py-[6px] text-[10.32px] md:text-[16.2px]`}
                  key={item.id}
                >
                  <p className="text-center text-[#FFFFFFB2] capitalize">
                    {item.title}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
            {subprocesses?.map((item) => (
              <>
                <div
                  className={`flex items-center justify-center bg-[#FFFFFF12] rounded-[30.15px]  py-[6px] text-[10.32px] md:text-[16.2px] ${
                    item.id === 1 ? "px-[12px]" : "px-[4px]"
                  }`}
                  key={item.id}
                >
                  <p className="text-center text-[#FFFFFFB2] capitalize">
                    {item.title}
                  </p>
                </div>
              </>
            ))}
            <div className="flex items-center justify-center bg-[#FFFFFF12] rounded-[30.15px] px-[4px] py-[6px]">
              <p className="text-center text-[#007BFF] capitalize text-[10.32px] md:text-[16.2px]">
                + More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

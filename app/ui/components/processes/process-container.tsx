import React from "react";
import { ourProcesses } from "@/app/utils/data";
import Image from "next/image";
import ProcessItem from "./process-item";

export default function ProcessContainer() {
  return (
    <div>
      <div
        className="text-white text-[50px] md:text-[80px] mt-[120px]"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <p className="text-center leading-[63px]  md:leading-[101.59px]">
          The way we{" "}
        </p>
        <p className="text-center leading-[63px] md:leading-[101.59px]">
          Handle things
        </p>
      </div>

      <div className="hidden md:block p-[6%] mt-[7%]">
        {ourProcesses?.map((item) => (
          <>
            <div
              data-aos="fade-left"
              data-aos-once="false"
              className={`flex justify-between items-center py-[7%] ${
                item.id % 2 === 0 ? "block" : "hidden"
              }`}
            >
              <div
                className={`${
                  item.id % 2 === 0 ? "float-left" : "float-right"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={576}
                  height={576}
                  className="rounded-[11.57px]"
                />
              </div>

              <div
                className={`h-[576px] text-white ml-[4px] ${
                  item.id % 2 === 0 ? "float-right" : "float-left"
                }`}
              >
                <span className="text-[15.8px] text-white font-[400] capitalize">
                  our process
                </span>
                <p
                  className={`font-[500] text-[59.4px] leading-[59.4px] my-[4%] ${
                    item.id === 5 ? "w-[503px]" : " w-[450px]"
                  }`}
                >
                  {item.title}
                </p>
                <p className="w-[437px] text-[18px]">{item.description}</p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-once="false"
              className={`flex justify-between items-center py-[7%] ${
                item.id % 2 !== 0 ? "block" : "hidden"
              }`}
            >
              <div
                className={`h-[576px] text-white ${
                  item.id % 2 !== 0 ? "float-right" : "float-left"
                }`}
              >
                <span className="text-[15.8px] text-white font-[400] capitalize">
                  our process
                </span>
                <p
                  className={`font-[500] text-[59.4px] leading-[59.4px] my-[4%] ${
                    item.id === 5 ? "w-[503px]" : " w-[450px]"
                  }`}
                >
                  {item.title}
                </p>
                <p className="w-[437px] text-[18px]">{item.description}</p>
              </div>
              <div
                className={`${
                  item.id % 2 !== 0 ? "float-left" : "float-right"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={576}
                  height={576}
                  className="rounded-[11.57px]"
                />
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="mx-[6%] mt-[10%] md:hidden">
        {ourProcesses?.map((item) => (
          <>
            <div
              data-aos="fade-right"
              data-aos-once="false"
              className={`py-[3.5%] mt-[10px]`}
            >
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={576}
                  height={576}
                  className="rounded-[11.57px]"
                />
              </div>

              <div className={` text-white ml-[4px] mt-[10px]`}>
                <span className="text-[15.8px] text-white font-[400] uppercase mt-[]">
                  our process
                </span>
                <p
                  className={`font-[500] text-[26.36px] md:text-[59.4px] leading-[23.3px] md:leading-[59.4px] my-[4%] `}
                >
                  {item.title}
                </p>
                <p className="text-[15.19px]">{item.description}</p>
                <br />
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="ml-3" data-aos="fade-up" data-aos-once="false">
        <div className="hidden px-[4%] pt-[4%] md:grid grid-cols-3">
          {ourProcesses?.map((item) => (
            <>
              <div
                className={`h-[627px] rounded-[13.5px] bg-[#FCFCFD1A] p-[5%] mx-1.5 my-4 w-[426px]`}
                key={item.id}
              >
                <ProcessItem
                  title={item.title}
                  description={item.description}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

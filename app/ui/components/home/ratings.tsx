"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ratings } from "@/app/utils/data";

export default function Ratings() {
  const [index, setIndex] = useState<number>(1);
  const goBack = () => {
    if (index > 1) {
      setIndex(index - 1);
    } else {
      setIndex(ratings.length);
    }
  };

  const goNext = () => {
    if (index < ratings.length) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  };
  return (
    <div
      className="md:my-[9%] md:mx-[9%]"
      data-aos="fade-up"
      data-aos-once="false"
    >
      <div className="flex justify-center items-center">
        <Image src="/reviews/stars.svg" alt="5 stars" width={132} height={18} />
      </div>

      <div className="flex justify-between items-center mx-[2%] md:mx-[4%]">
        <div className="md:mt-[8%]" onClick={() => goBack()}>
          <Image
            src="/reviews/left-arrow.svg"
            alt="Arrow"
            width={50}
            height={50}
          />
        </div>

        <div className="" data-aos="fade-right" data-aos-once="false">
          {ratings?.map((item) => (
            <div
              className={`${index === item.id ? "block" : "hidden"}`}
              key={item.id}
            >
              <div className="flex items-center justify-center my-[3%]">
                <p className="text-center text-[15.56px] md:text-[32.75px] leading-[35.14px] md:leading-[62.4px] text-white w-[308.99px] last:md:w-[855px] font-[400]">
                  {item.review}
                </p>
              </div>

              <div className="user">
                <div className="flex justify-center items-center">
                  {" "}
                  <Image
                    src={`${item.user}`}
                    alt="User"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />{" "}
                </div>

                <p className="text-center text-white font-[400] text-[13.1px] md:text-[17px] leading-[32px]">
                  {item.name}
                </p>
                <p className="text-center text-[#FFFFFF80] font-[400] text-[10.19px] md:text-[14px] italic">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:mt-[8%]" onClick={() => goNext()}>
          <Image
            src="/reviews/right-arrow.svg"
            alt="Arrow"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}

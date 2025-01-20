"use client";
import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}
export default function FaqItem({ question, answer }: FaqItemProps) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <div className="border-[1.17px] border-[#FFFFFF0D] faq-item rounded-[11.5px] md:rounded-[17.49px] w-[353px] md:w-[785px] p-[1.8%] my-[2%]">
        <div className="flex justify-between items-center text-white font-[400] text-[12px] md:text-[20.18px] leading-[37.3px]">
          <p>{question}</p>
          <p
            className="font-[900] text-[24px] cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {`${show === false ? "+" : "-"}`}
          </p>
        </div>

        {show && (
          <div
            className="my-[4px]"
            // data-aos="slide-up"
            // data-aos-anchor-placement="top-center"
          >
            <p className="text-[#D8D8D8] text-[12px] md:text-[18px] font-[400]">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

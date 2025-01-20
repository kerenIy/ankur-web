import { faqs } from "@/app/utils/data";
import Image from "next/image";
import React from "react";
import FaqItem from "./faq-item";

export default function FaqsContainer() {
  return (
    <>
      <div
        className="my-[7%] md:my-[14%] mx-[3.5%] md:mx-[9%]"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="">
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <p className="text-white text-[25.9px] md:text-[42.29px] leading-[35.69px] md:leading-[58.28px] font-[400] text-center">
                Frequently asked{" "}
                <span className="text-[#007BFF]">questions</span>
              </p>

              <Image
                src="/star-outline.svg"
                alt="Star"
                width={33}
                height={35}
                className="ml-1 md:mb-[40px]"
              />
            </div>
          </div>

          <p className="text-[#FFFFFF80] text-center font-[300] text-[13.3px] md:text-[22.77px] leading-[37.3px] my-1">
            Still have questions?
            <span className="underline ml-1">Contact Us</span>
          </p>

          <div className="flex justify-center items-center">
            <div className="">
              {faqs?.map((faq) => (
                <div key={faq.id}>
                  <FaqItem question={faq.question} answer={faq.answer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-[24%] px-[1%] footer-img"
        // data-aos="fade-up"
        // data-aos-once="false"
      >
        <Image src="/logo-footer.png" alt="Ankur" width={1920} height={400} />
      </div>
    </>
  );
}

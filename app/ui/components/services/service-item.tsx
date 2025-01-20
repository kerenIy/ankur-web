import Image from "next/image";
import React from "react";

interface ServiceItemsProps {
  title: string;
  description: string;
  videoLink: string;
}

export default function ServiceItem({
  title,
  description,
  videoLink,
}: ServiceItemsProps) {
  return (
    <div
      className="relative h-[800px]"
      data-aos="fade-up"
      data-aos-once="false"
    >
      <div className="border-[1px] border-[#FFFFFF0D] services-container rounded-[19.37px] p-[2.5%] my-[7%]">
        <div className="bg-[#FCFCFD1A] p-[2.5%] rounded-[18px] text-white">
          <p className="text-[18px] md:text-[22.5px] font-[500] leading-[23.3px] md:leading-[31.5px] mt-2">
            {title}
          </p>
          <p className="mt-4 text-[14px] md:text-[18px] font-[300] leading-[27px] md:w-[800px]">
            {description}
          </p>

          <div className="mt-[30%] hidden md:flex justify-end items-end">
            <div className="flex items-center border-[1px] border-[#151515] rounded-[9px] p-[1%] bg-[#222222] cursor-pointer">
              <p className="text-[18px] font-[500]">Talk to our experts</p>
              <div className="flex justify-between items-center mx-2">
                <Image src="/ctrl.svg" alt="CTRL" width={22.5} height={22.5} />
                <Image
                  src="/key.svg"
                  alt="Key"
                  width={22.5}
                  height={22.5}
                  className="mx-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[2.5%] absolute top-0 w-[100%] ">
        <video
          controls
          autoPlay
          muted
          loop
          playsInline
          className="rounded-[18px] opacity-10 "
          // loading="lazy"
        >
          {" "}
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

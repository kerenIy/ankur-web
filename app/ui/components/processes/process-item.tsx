import React from "react";

interface ProcessItemProps {
  title: string;
  description: string;
}

export default function ProcessItem({ title, description }: ProcessItemProps) {
  return (
    <>
      <div className="">
        <p className="text-[22.5px] font-[500] leading-[31.5px] text-white">
          {title}
        </p>
        <p className="font-[400] text-[#64646B] text-[18px] leading-[27px] my-2">
          {description}
        </p>
      </div>
    </>
  );
}

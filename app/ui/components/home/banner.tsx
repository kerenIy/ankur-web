import React from "react";
import { logos } from "@/app/utils/data";

export default function Banner() {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="false"
      className="mx-[3%] mb-[3.5%] md:mx-[6%] md:mb-[7%]"
    >
      <div className="sm-banner md:flex justify-center items-center">
        {logos?.map((item) => (
          <div className="mx-[10px] md:mx-[25px]" key={item.id}>
            <img src={`/partners/${item.icon}`} alt={`${item.title}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

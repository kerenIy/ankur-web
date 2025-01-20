import { servicesPage } from "@/app/utils/data";
import React from "react";
import ServiceItem from "./service-item";

export default function ServiceContainer() {
  return (
    <div>
      <div
        className="text-white text-[50px] md:text-[80px] mt-[120px]"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <p className="text-center leading-[63px] md:leading-[101.59px]">
          What we{" "}
        </p>
        <p className="text-center leading-[63px] md:leading-[101.59px]">
          Have to offer
        </p>
      </div>

      <div className="p-[3%] md:p-[4%] mt-[4%] md:mt-[7%]">
        {servicesPage.map((item) => (
          <div className="" key={item.id}>
            <ServiceItem
              title={item.title}
              description={item?.description ?? ""}
              videoLink={item?.video}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

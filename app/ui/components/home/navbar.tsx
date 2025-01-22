"use client";

import Link from "next/link";
import React from "react";

import Image from "next/image";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const active = `bg-[#FFFFFF0D] rounded-[12.5px] px-[6px] md:px-[12px] py-[3px] md:py-[6px] font-[600] text-white`;

  return (
    <div className="relative">
      <div className="absolute top-0">
        <Image src="/light-rays.svg" alt="Logo" width={1900} height={1900} />
      </div>
      <div
        data-aos="fade-down"
        data-aos-once="false"
        className="fixed w-[100%] top-[15px] z-[1000] "
      >
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center backdrop-blur-md">
            <div className="border-[1px] border-[#FFFFFF0D] bg-[#20202080] rounded-[16.84px] md:rounded-[24px] p-[8px] md:p-[16px] lg:w-[700px]">
              <div className="flex justify-between items-center  text-[#FFFFFF80] text-[12px] md:text-[18px]">
                <Link
                  href="/"
                  className={isActive("/") ? `${active}` : "mx-1.5"}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className={isActive("/services") ? `${active}` : "mx-1.5"}
                >
                  Services
                </Link>
                <Link
                  href="/processes"
                  className={isActive("/processes") ? `${active}` : "mx-1.5"}
                >
                  Processes
                </Link>

                <Link
                  href="https://outlook.office365.com/owa/calendar/contactankursolutionscom@ankursolutions.com/bookings/"
                  target="_blank"
                  className="bg-[#007BFF] text-white rounded-[8px] px-[8px] py-[4px] font-[600]"
                >
                  Say Hi &#x1f44b;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

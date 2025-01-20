"use client";

import { useEffect } from "react";

// @ts-expect-error: Type mismatch expected here due to temporary workaround

import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  return <>{children}</>;
}

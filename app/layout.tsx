import type { Metadata } from "next";
import "./globals.css";

import { inter } from "./font";
import AOSProvider from "./ui/components/general/aos-provider";
import Footer from "./ui/components/general/footer";
import Navbar from "./ui/components/home/navbar";

export const metadata: Metadata = {
  title: "Ankur Global",
  description: "Unlimited solutions, limitless possibilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <AOSProvider>
          <>
            <div className="black-blue-gradient px-[%] pt-[6%] relative w-[100%]">
              <Navbar />
              {children}
            </div>
            <Footer />
          </>
        </AOSProvider>
      </body>
    </html>
  );
}

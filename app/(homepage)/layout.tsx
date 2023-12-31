"use client";

import { menulinks } from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

function Homepage({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      {/* sidebar */}
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-[224px] md:inset-y-0 bg-saffron z-[80]">
        <div className="relative flex align-middle justify-between h-3 w-3 md:h-9 md:w-9 lg:h-10 lg:w-10 mr-6 mb-16">
          
          <Link href="/homepage"><div>
            <CldImage fill alt="OM logo" src="om/ocm28xxc0mrkdqmvzvmd" /></div>
         
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-12">
                  OM-ExBeyond
                </span>
                </Link>
        </div>
        
        
        {menulinks?.map((menuitem, index) => {
          return (
            <div key={index}>
              <Link href={menuitem.pagelink}>
              <ul className="flex px-3 py-3 font-bold uppercase">
                <CldImage
                  width="40"
                  height="50"
                  alt="menu icon"
                  src={menuitem.icon}
                />
                <li className="text-[12px] pl-1 text-center text-white">
                  {menuitem.name}
                </li>
              </ul>
              </Link>
            </div>
          );
        })}
      </div>

      <main className="md:pl-[224px]">
        <Navbar />
        {children}</main>
    </div>
  );
}

export default Homepage;

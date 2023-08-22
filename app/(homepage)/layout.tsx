"use client";

import { menulinks } from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

function Homepage({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-[224px] md:inset-y-0 bg-saffron z-[80]">
        <div className="relative flex align-middle justify-between h-3 w-3 md:h-4 md:w-4 lg:h-10 lg:w-10 mr-6 mb-16">
          <div><CldImage className="ml-3 mt-3" fill alt="OM logo" src="om/ocm28xxc0mrkdqmvzvmd" /></div>
          <h1
          className={cn("text-[8px] lg:text-[12px] font-bold text-stone-800 ml-16 mt-3", font.className)}
        >
          OM- ExBeyond
        </h1>
        
        </div>
        
        {menulinks?.map((menuitem, index) => {
          return (
            <div key={index}>
              <ul className="flex px-6 py-3">
                <CldImage
                  width="40"
                  height="50"
                  alt="menu icon"
                  src={menuitem.icon}
                />
                <li className="text-[12px] pl-1 text-center text-zinc-800">
                  {menuitem.name}
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <main className="md:pl-[224px]">{children}</main>
    </div>
  );
}

export default Homepage;

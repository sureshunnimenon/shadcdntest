"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const font = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

function Landingnav() {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex justify-between align-middle p-2 bg-zinc-50/90">
      <Link href="/" className="flex items-center">
        <div className="relative h-9 w-9 md:h-12 md:w-12 lg:h-16 lg:w-16 mr-4">
          <Image fill alt="logo" src="/om1.png" />
        </div>
        <div>
        <h1 className={cn("text-sm lg:text-xl font-bold text-[#ff8000]", font.className)}>
          OM- ExBeyond
        </h1>
        <h3 className={cn("text-[8px] md:text-[10px] lg:text-[14px] font-semibold text-yellow-200 bg-amber-700/90 flex items-center px-1", font.className)}>
        {" "}
        The Website for all your Spiritual Needs.
      </h3></div>
      </Link>

      <Badge variant="secondary"> About Us </Badge>
      <Badge variant="secondary"> Contact Us </Badge>
      <Badge variant="secondary"> Search </Badge>
      <Badge variant="secondary"> Nearby Temples </Badge>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/homepage" : "/sign-up"}> <Button className="py-3 rounded-full bg-slate-300" variant="exbeyondom"> {isSignedIn ? "Your Profile" :"Start Journey"} </Button></Link>
      </div>
    </div>
  );
}

export default Landingnav;

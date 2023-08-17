"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const font = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

function Landingnav() {
  const { isSignedIn } = useAuth();
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-between align-middle p-2 bg-zinc-50/90">
      <Link href="/" className="flex items-center">
        <div className="relative h-9 w-9 md:h-12 md:w-12 lg:h-16 lg:w-16 mr-4">
          <Image fill alt="logo" src="/om1.png" />
        </div>
        <div>
          <h1
            className={cn(
              "text-sm lg:text-xl font-bold text-om",
              font.className
            )}
          >
            OM- ExBeyond
          </h1>
          <h3
            className={cn(
              "text-[8px] md:text-[10px] lg:text-[14px] font-semibold text-yellow-200 bg-amber-700/90 flex items-center px-1",
              font.className
            )}
          >
            {" "}
            The Website for all your Spiritual Needs.
          </h3>
        </div>
      </Link>

      <Badge variant="secondary"> About Us </Badge>
      <Badge variant="secondary"> Contact Us </Badge>
      <Badge variant="secondary"> Search </Badge>
      <Badge variant="secondary"> Nearby Temples </Badge>

      
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/homepage" : "/sign-up"}>
          {" "}
          <Button
            className="py-3 rounded-full bg-slate-300"
            variant="exbeyondom"
          >
            {" "}
            {isSignedIn ? "Your Profile" : "Start Journey"}{" "}
          </Button>
        </Link>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Sun className="h-[1.0rem] w-[1.0rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.0rem] w-[1.0rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
}

export default Landingnav;

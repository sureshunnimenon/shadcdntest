"use client"

import React from 'react'
import { Button } from './ui/button'
import {Menu} from 'lucide-react'

import { menulinks } from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import Link from 'next/link'

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
function Mobilesidebar() {
  return (
    <Sheet>
    <SheetTrigger>
        <Button variant='ghost' size="icon" className='md:hidden' >
            <Menu />
        </Button>
        </SheetTrigger> 

        <SheetContent side="left" className="p-0">
        <div className="relative flex align-middle justify-between h-8 w-8 md:h-10 md:w-10  mr-6 mb-16">
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

        </SheetContent>
    </Sheet>
  )
}

export default Mobilesidebar
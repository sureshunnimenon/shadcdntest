import React from 'react'


import { UserButton } from '@clerk/nextjs'
import Mobilesidebar from '@/components/Mobilesidebar'

function Navbar() {
  return (
    <div className="flex items-center p-4">
        <Mobilesidebar />
        <div className="flex justify-end w-full">
            <UserButton afterSignOutUrl='/'/>

        </div>
    </div>
  )
}

export default Navbar
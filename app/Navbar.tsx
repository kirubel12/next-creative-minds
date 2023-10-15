"use client"
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/toggle-mode'
import Link from 'next/link'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const Navbar = () => {
  return (
    <nav className='flex justify-between m-10'>
    <div>
        <Link href="/">
            <h1 className='text-xl font-bold'>Creative-minds</h1>
        </Link>
    </div>
    <div className='flex gap-4 items-center'>
        <Link href="/dashboard">
            <h1>Dashboard</h1>
        </Link>
        <Link href="/auth/login">
            <Button className='dark:bg-primary bg-slate-600'>Join Now</Button>
        </Link>
        <Link href="/logout" >
            <p>Logout</p>
        </Link>
        
           <ModeToggle />
        
       {/* the logged in user */}
        
    </div>
</nav>
  )
}

export default Navbar
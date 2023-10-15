"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="flex justify-between m-10">
      <div>
        <Link href="/">
          <h1 className="text-xl font-bold">Creative-minds</h1>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        
        {!user && (
          <Link href="/auth/login">
            <Button className="dark:bg-primary bg-slate-600">Join Now</Button>
          </Link>
        )}
        {user && (
            <div className="flex gap-4 items-center">
        <Link href="/dashboard">
        <img className="w-12 rounded-full cursor-pointer" src={user.photoURL} />
        </Link>
        
        <Link href="/logout">
          <p>Logout</p>
        </Link>
            </div>
        )}

        <ModeToggle />

        {/* the logged in user */}
      </div>
    </nav>
  );
};

export default Navbar;

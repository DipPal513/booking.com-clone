"use client";
import Link from "next/link";
import React, { useState } from "react";
import {Bars3Icon} from '@heroicons/react' 
const Header = () => {
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-[#13894]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"}>
            <h1 className="text-xl font-bold">Booking.com</h1>
          </Link>
        </div>
        <span className="sr-only">Open mobile menu</span>
        <Bars3Icon className="h-6 w-6" area-hidden="true" />
      </nav>
    </header>
  );
};

export default Header;

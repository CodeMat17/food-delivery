"use client";

import DesktopMenu from '@/components/DesktopMenu'
import MobileMenu from "@/components/MobileMenu";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";


const NavHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <div className='sticky top-0 z-50 px-4 py- border-b-2 bg-[#FFDFB9] border-b-[#A4193D]/30'>
      <div className='flex items-center justify-between text-[#A4193D]'>
        <Link aria-label='logo' href='/' className='relative w-20 h-20'>
          <Image
            alt='logo'
            fill
            priority
            src='/logo.webp'
            className='object-fill animate-wiggle'
          />
        </Link>
        <div className='flex items-center space-x-4'>
          {/* <p>D/L</p> */}
          <MobileMenu />
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;

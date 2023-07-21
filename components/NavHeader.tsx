"use client";

import DesktopMenu from '@/components/DesktopMenu'
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import { useState } from "react";

const links = [
  { id: 1, item: "HOME" },
  { id: 2, item: "MENU" },
];

const NavHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const user = false;

  const toggleMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  return (
    <div className='relative px-4 py-3 border-b-2 border-b-[#f90057]/30'>
      <div className='flex items-center justify-between text-[#f90057]'>
        <Link href='/'>Logo</Link>
        <div className="flex items-center space-x-4">
          <p>D/L</p>
          <MobileMenu />
         <DesktopMenu />
        </div>
       
      </div>
    </div>
  );
};

export default NavHeader;

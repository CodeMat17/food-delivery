"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

export default function Example() {
  return (
    <div className='sm:hidden'>
      <Menu as='div' className='relative w-full'>
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                aria-label='open setOpenMenu'
                className={`flex transition-all transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}>
                {open ? <MdOutlineClose size={30} /> : <HiMenuAlt3 size={30} />}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-700'
              enterFrom='transform opacity-0 -translate-x-20'
              enterTo='transform opacity-100 translate-x-0'
              leave='transition ease-in duration-200'
              leaveFrom='transform opacity-100 translate-x-0'
              leaveTo='transform opacity-0 -translate-x-20'>
              <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#FFDFB9] shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        aria-label='home link'
                        href='/'
                        className={`${
                          active ? "bg-[#A4193D] text-white" : "text-[#A4193D]"
                        } transition duration-700 ease-in-out  group flex w-full items-center rounded-lg p-4 text-xl`}>
                        HOME
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        aria-label='menu link'
                        href='/menu'
                        className={`${
                          active ? "bg-[#A4193D] text-white" : "text-[#A4193D]"
                        } transition duration-700 ease-in-out  group flex w-full items-center rounded-lg p-4 text-xl`}>
                        MENU
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        aria-label='cart link'
                        href='/cart'
                        className={`${
                          active ? "bg-[#A4193D] text-white" : "text-[#A4193D]"
                        } transition duration-700 ease-in-out  group flex w-full items-center rounded-lg p-4 text-xl`}>
                        CART
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        aria-label='orders link'
                        href='orders'
                        className={`${
                          active ? "bg-[#A4193D] text-white" : "text-[#A4193D]"
                        } transition duration-700 ease-in-out  group flex w-full items-center rounded-lg p-4 text-xl`}>
                        ORDERS
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

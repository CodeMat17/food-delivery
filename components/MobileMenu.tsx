"use client";

import { Menu, Transition } from "@headlessui/react";
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
              <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-lg p-4 text-2xl`}>
                        {/* {active ? (
                          <DuplicateActiveIcon
                            className='mr-2 h-5 w-5'
                            aria-hidden='true'
                          />
                        ) : (
                          <DuplicateInactiveIcon
                            className='mr-2 h-5 w-5'
                            aria-hidden='true'
                          />
                        )} */}
                        EDIT
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-lg p-4 text-2xl`}>
                     
                        Duplicate
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-lg p-4 text-2xl`}>
                      
                        Archive
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-lg p-4 text-2xl`}>
                      
                        Move
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-lg p-4 text-2xl`}>
                     
                        Delete
                      </button>
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

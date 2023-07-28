"use client";

import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";

const CartPage = () => {
  return (
    <div className='w-full min-h-screen text-[#A4193D] flex flex-col sm:flex-row sm:justify-between'>
      {/* order list */}
      <div className='px-4 py-12 text-sm sm:w-[60%] lg:w-[70%] lg:max-w-xl lg:mx-auto space-y-2'>
        <div className=' flex items-center space-x-2'>
          <div className='relative w-20 h-20'>
            <Image alt='' src='/dish7.jpeg' fill />
          </div>
          <div className=' flex flex-grow flex-col lg:flex-row lg:items-center lg:justify-around '>
            <div className='max-w-[180px] truncate'>
              <h2 className='font-semibold'>Title and subtitle of foodmm</h2>
              <p className='font-light opacity-70'>
                Description ghghgb bghgb bghgb bbghgh
              </p>
            </div>
            <p className='py-1 font-semibold'>N100,000</p>
          </div>
          <div>
            <button className='border'>
              <MdOutlineClose size={23} />
            </button>
          </div>
        </div>

        <div className=' flex items-center space-x-2'>
          <div className='relative w-20 h-20'>
            <Image alt='' src='/dish7.jpeg' fill />
          </div>
          <div className=' flex flex-grow flex-col lg:flex-row lg:items-center lg:justify-around '>
            <div className='max-w-[180px] truncate'>
              <h2 className='font-semibold'>Title and subtitle of foodmm</h2>
              <p className='font-light opacity-70'>
                Description ghghgb bghgb bghgb bbghgh
              </p>
            </div>
            <p className='py-1 font-semibold'>N100,000</p>
          </div>
          <div>
            <button className='border'>
              <MdOutlineClose size={23} />
            </button>
          </div>
        </div>

        <div className=' flex items-center space-x-2'>
          <div className='relative w-20 h-20'>
            <Image alt='' src='/dish7.jpeg' fill />
          </div>
          <div className=' flex flex-grow flex-col lg:flex-row lg:items-center lg:justify-around '>
            <div className='max-w-[180px] truncate'>
              <h2 className='font-semibold'>Title and subtitle of foodmm</h2>
              <p className='font-light opacity-70'>
                Description ghghgb bghgb bghgb bbghgh
              </p>
            </div>
            <p className='py-1 font-semibold'>N100,000</p>
          </div>
          <div>
            <button className='border'>
              <MdOutlineClose size={23} />
            </button>
          </div>
        </div>
      </div>

      {/* total list */}
      <div className='py-12 px-4 md:px-8 sm:pt-20 sm:sticky sm:top-0 bg-fuchsia-100 space-y-3 sm:w-[40%] lg:w-[30%] flex flex-col justify-cente'>
        <div className='flex justify-between'>
          <h1>Subtotal (3) items</h1>
          <p>N6000</p>
        </div>
        <div className='flex justify-between'>
          <h1>Service Cost</h1>
          <p>N0</p>
        </div>
        <div className='flex justify-between'>
          <h1>Delivery Cost</h1>
          <p>N0</p>
        </div>
        <div className='flex justify-between py-6'>
          <h1>TOTAL (INCL VAT)</h1>
          <p>N0</p>
        </div>
        <div className='flex justify-end'>
          <button className='text-fuchsia-100 bg-[#A4193D] text-sm font-bold px-4 rounded-lg py-2'>
            CHECkOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

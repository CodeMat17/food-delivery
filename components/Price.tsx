"use client";

import { MdAddShoppingCart } from "react-icons/md";

type Props = {
  id: number;
  price: number;
  options?: { title: string; addittionalPrice: number }[];
};

const Price = ({ id, price, options }: Props) => {
  return (
    <>
      <p className='font-semibold text-lg'>N{price.toFixed(2)}</p>
      <div className='space-y-4'>
        <div className='space-x-4 transition-all duration-300 ease-in'>
          {options?.map((option) => (
            <button
              key={option.title}
              aria-label='toppings button'
              className=' rounded-full text-white text-sm bg-[#A4193D] px-4 py-2 hover:text-[#A4193D] hover:bg-transparent hover:ring-1 hover:ring-[#A4193D] transition duration-300 ease-in'>
              {option.title}
            </button>
          ))}
        </div>
        {/* quantity and add button */}
        <div className='mt-4 w-full flex ring-1 ring-[#A4193D]  rounded-full overflow-hidden'>
          {/* quantity */}
          <div className='w-full flex items-center justify-between px-4'>
            <span className='text-sm'>Quantity</span>
            <div className='flex space-x-3'>
              <button aria-label='decrease button' className='font-semibold'>
                {"<"}
              </button>
              <span>1</span>
              <button aria-label='increase button' className='font-semibold'>
                {">"}
              </button>
            </div>
          </div>
          {/* cart button */}
          <div className="group">
            <button
              aria-label='add to cart'
              className='transition-all transform duration-500 flex items-center justify-center space-x-3 text-sm bg-[#A4193D] text-white px-4 py-3 whitespace-nowrap w-20 group-hover:w-40'>
              <span className='rounded-full transition transform duration-1000 group-hover:rotate-[360deg]'>
                <MdAddShoppingCart size={20} />
              </span>
              <span className='transition transform duration-1000 hidden opacity-0 group-hover:opacity-100 group-hover:block'>
                ADD TO CART
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;

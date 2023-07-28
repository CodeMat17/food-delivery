"use client";

import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";

type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ id, price, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [options, price, quantity, selected]);

  return (
    <>
      <p className='font-semibold text-lg'>N{total.toFixed(2)}</p>
      <div className='space-y-4'>
        <div className='space-x-4 transition-all duration-300 ease-in'>
          {options?.map((option, index) => (
            <button
              onClick={() => setSelected(index)}
              key={option.title}
              aria-label='toppings button'
              className={`min-w-[6rem] rounded-full text-sm px-4 py-2  ring-1 ring-[#A4193D] transition transform duration-300 ease-in-out hover:scale-110 ${
                selected === index
                  ? "bg-[#A4193D] text-white"
                  : "text-[#A4193D] "
              }  `}>
              {option.title}
            </button>
          ))}
        </div>
        {/* quantity and add button */}
        <div className='mt-4 w-full flex ring-1 ring-[#A4193D] rounded-full overflow-hidden'>
          {/* quantity */}
          <div className='w-full flex items-center justify-between px-4'>
            <span className='text-sm'>Quantity</span>
            <div className='flex space-x-3'>
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                aria-label='decrease button'
                className='font-semibold'>
                {"<"}
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
                aria-label='increase button'
                className='font-semibold'>
                {">"}
              </button>
            </div>
          </div>
          {/* cart button */}
          <div className='group'>
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

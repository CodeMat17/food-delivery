"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always cripsy, always hot, always fresh.",
    image: "/slide-1.webp",
  },
  {
    id: 2,
    title: "we deliver your orders to your door step.",
    image: "/slide2.webp",
  },
  {
    id: 3,
    title: "from the best kitchen in town.",
    image: "/slide3.webp",
  },
  {
    id: 4,
    title: "share with family and friends.",
    image: "/slide4.webp",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full  md:h-[calc(100vh-8rem)] bg-[#FFDFB9] overflow-hidden px-4 pt-12 md:pt-0 flex flex-col md:flex-row items-center justify-center'>
      <div className='text-center md:text-left md:pl-8 lg:pl-20'>
        <h1 className='text-[#A4193D] uppercase text-3xl lg:text-4xl w-full md:max-w-sm lg:max-w-lg'>
          {data[currentSlide].title}
        </h1>
        <button
          aria-label='order now'
          className=' mt-8 transition-colors duration-500 bg-[#A4193D] hover:bg-[#f59c2f] text-[#FFDFB9] hover:text-[#A4193D] hover:shadow-[#A4193D] hover:shadow-lg px-6 py-3 md:py-4 rounded-lg'>
          ORDER NOW
        </button>
      </div>
      <div className='relative w-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] h-[400px] lg:h-[500px] '>
        <Image
          alt='hero slider'
          fill
          priority
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          src={data[currentSlide].image}
        />
      </div>
    </div>
  );
};

export default Slider;

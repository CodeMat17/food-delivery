"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always cripsy, always hot, always fresh.",
    image: "/hero4.webp",
  },
  {
    id: 2,
    title: "we deliver your orders to your door step.",
    image: "/hero2.webp",
  },
  {
    id: 3,
    title: "from the best kitchen in town.",
    image: "/hero3.webp",
  },
  {
    id: 4,
    title: "share with family and friends.",
    image: "/hero1.webp",
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
    <div className='w-full  md:h-[calc(100vh-4rem)] bg-[#FFDFB9] overflow-hidden px-4 pt-12 md:pt-0 flex flex-col md:flex-row items-center justify-around '>
      <div className='text-center md:text-left md:pl-8 lg:pl-20'>
        <h1 className='text-[#A4193D] uppercase text-3xl lg:text-4xl w-full md:max-w-sm lg:max-w-md'>
          {data[currentSlide].title}
        </h1>
        <button
          aria-label='order now'
          className=' mt-8 transition-colors duration-500 bg-[#A4193D] hover:bg-[#f59c2f] text-[#FFDFB9] hover:text-[#A4193D] hover:shadow-[#A4193D] hover:shadow-lg px-6 py-3 md:py-4 rounded-lg'>
          ORDER NOW
        </button>
      </div>
      <div className='relative my-8 w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden'>
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

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always cripsy, always hot, always fresh.",
    image: "/slide1.webp",
  },
  {
    id: 2,
    title: "we deliver your orders to your door step.",
    image: "/slide2.webp",
  },
  {
    id: 3,
    title: "the best kitchen in town.",
    image: "/slide3.webp",
  },
  {
    id: 4,
    title: "share with family and friends.",
    image: "/slide2.webp",
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
    <div className='bg-fuchsia-50 py-8 w-full h-screen md:h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-around'>
      <div className=' w-full h-1/2 md:w-1/2 md:h-full px-4 pb-6 md:pb-0 md:pr-0 lg:pl-24 flex flex-col items-center justify-center md:items-start space-y-6 text-center md:text-start text-[#f90057]'>
        <h1 className='uppercase text-3xl md:text-5xl lg:text-5xl'>
          {data[currentSlide].title}
        </h1>
        <button aria-label="order now" className='transition-colors duration-500  bg-[#f90057] hover:bg-fuchsia-200 text-fuchsia-50 hover:text-[#f90057] px-6 py-3 md:py-4 rounded-lg'>
          ORDER NOW
        </button>
      </div>
      <div className=' relative w-full h-1/2 md:w-1/2 md:h-full lg:w-[630px] lg:h-[630px]  flex items-center justify-center '>
        <Image
          alt='slider'
          fill
          priority
          // sizes='(min-width: 500px) 50vw, 50vw'
          src={data[currentSlide].image}
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
    </div>
  );
};

export default Slider;

import Image from "next/image";
import CountDown from "./CountDown";

const Offers = () => {
  return (
    <div className='pt-12 pb-20 px-4 bg-[url(/offer-bg.webp)] flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-x-6'>
      {/* text container */}
      <div className='text-center md:text-left space-y-2 text-white md:max-w-sm lg:max-w-2xl'>
        <h1 className='text-4xl md:text-5xl'>Delicious Roasted Chiken</h1>
        <p className='text-xl py-2 text-white/60'>
          Roasted with native African spices. Just a few left.
        </p>
        <CountDown />
        <button
          aria-label='order now'
          className='transition-colors duration-500 ease-in-out bg-[#A4193D] hover:bg-[#FFDFB9] hover:text-[#A4193D] px-6 py-4 rounded-lg tracking-widest'>
          Order Now
        </button>
      </div>

      <div className='relative p-6 flex items-center justify-center overflow-hidden rounded-full'>
        <div className='absolute top-0 -left-4 w-36 h-36 bg-red-700 rounded-full filter blur-2xl animate-blob'></div>
        <div className='absolute top-0 -right- w-48 h-48 bg-yellow-700 rounded-full filter blur-2xl animate-blob animation-delay-2000'></div>
        <div className='absolute left-20 -bottom-8 w-36 h-36 bg-fuchsia-700 rounded-full filter blur-2xl  animate-blob animation-delay-4000'></div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] p-8 bg-gradient-to-r from-yellow-700 via-blue-800 to-red-800 rounded-full animate-pulse  overflow-hidden' />
        {/* image container */}
        <div className='relative w-[250px] h-[250px] md:w-[310px] md:h-[310px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden'>
          <Image fill alt='' src='/offer.webp' className='object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Offers;

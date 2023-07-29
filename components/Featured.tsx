import { featuredProducts } from "@/data";
import Image from "next/image";
import FeaturedModal from "./FeaturedModal";

const Featured = () => {
  return (
    <div className='py-8 border w-screen overflow-x-scroll text-[#A4193D]'>
      {/* wrapper */}
      <div className='w-max flex space-x-8 px-4'>
        {/* single item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className='p-4 rounded-lg overflow-hidden max-w-[250px] border border-gray-300 flex flex-col items-center justify-around space-y-2 transition-all duration-300 hover:bg-[#FFDFB9] hover:shadow-xl'>
            {/* image container */}
            {product.img && (
              <div className='relative rounded-full overflow-hidden w-[150px] h-[150px] transition-all duration-300 hover:rotate-[60deg] hover:scale-125'>
                <Image alt='' src={product.img} fill className='object-cover' />
              </div>
            )}
            {/* text container */}
            <div className='flex flex-col justify-center items-center text-center gap-1'>
              <h1 className='font-semibold uppercase'>{product.title}</h1>
              <p className='text-sm'>{product.desc}</p>
              <span className='text-lg font-semibold py-2'>
                ₦{product.price}
              </span>
              <button aria-label='add to cart button' className='bg-[#A4193D] text-[#FFDFB9] px-4 py-2 rounded-full'>
                Add to Cart
              </button>

              <FeaturedModal />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

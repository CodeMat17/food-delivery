import { salad } from "@/data";
import Image from "next/image";
import Link from "next/link";
import {MdAddShoppingCart} from 'react-icons/md'

const CategoryPage = () => {
  return (
    <div className='w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-8 px-4 py-12 text-[#A4193D]'>
      {salad.map((item) => (
        <Link
          aria-label='salad button'
          href={`/product/${item.id}`}
          key={item.id}
          className='group w-full odd:bg-fuchsia-100 flex flex-col items-center border rounded-lg p-4 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out'>
          {/* image container */}
          {item.img && (
            <div className='relative w-36 h-36 rounded-full overflow-hidden transition transform group-hover:rotate-[60deg] group-hover:scale-125'>
              <Image src={item.img} alt='' fill />
            </div>
          )}
          <div className='mt-4 w-full flex items-center justify-between'>
            <h2 className='font-semibold '>{item.title}</h2>
            <p className='group-hover:hidden font-semibold '>N{item.price}</p>
            <button
              aria-label='add to cart'
              className='hidden group-hover:block text-sm rounded-full text-white bg-[#A4193D] p-2  transition-colors duration-700'>
              <MdAddShoppingCart size={23} />
            </button>
          </div>
          <p className='text-sm line-clamp-2 leading-4 mt-2'>{item.desc}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;

import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";

const ProductId = () => {
  return (
    <div className='px-4 py-12 flex flex-col md:flex-row justify-center items-center max-w-md md:max-w-4xl mx-auto text-[#A4193D] gap-6'>
      {/* image container */}
      {singleProduct.img && (
        <div className='relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72'>
          <Image
            alt=''
            fill
            src={singleProduct.img}
            className='object-contain'
          />
        </div>
      )}

      {/* text container */}
      <div className='text-center md:max-w-md md:text-left space-y-2 md:space-y-4'>
        <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>
          {singleProduct.title}
        </h1>
        <p className=''>
          {singleProduct.desc} gfgfh gfghdg vsdsdd vfvfg bv nbn bfg{" "}
        </p>
        <Price
          id={singleProduct.id}
          price={singleProduct.price}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default ProductId;

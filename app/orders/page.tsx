import { order } from "@/data";
import Image from "next/image";

const OrdersPage = () => {
  return (
    <div className='px-4 py-12 sm:pt-20 min-h-[70vh]'>
      <p className='font-semibold text-2xl md:text-3xl text-center'>ORDERS</p>
      <div>
        {order.map((item) => (
          <div
            key={item.id}
            className='w-full md:max-w-xl sm:mx-auto mt-4 sm:mt-6 flex items-start space-x-2'>
            <div className='relative w-12 h-12 rounded-full overflow-hidden'>
              <Image alt='' fill src={item.product} />
            </div>

            <div className='text-sm space-y-1 sm:space-y-0 sm:flex sm:items-center sm:justify-around sm:flex-grow'>
              <div className='space-y-1'>
                <div className='flex space-x-2'>
                  <p className='font-semibold'>ORDER ID:</p>
                  <p>{item.id}</p>
                </div>
                <div className='flex space-x-2'>
                  <p className='font-semibold'>DATE:</p>
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="space-y-1 ">
                <div className='flex space-x-2'>
                  <p className='font-semibold'>PRICE:</p>
                  <p>₦{item.price}</p>
                </div>
                <div className='flex space-x-2'>
                  <p className='font-semibold'>STATUS</p>
                  <p>{item.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

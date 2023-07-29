import Link from 'next/link'

const DesktopMenu = () => {
  return (
    <div className='hidden sm:flex space-x-1 transition-colors duration-500'>
      <Link
        aria-label='home link'
        href='/'
        className='px-4 py-2 rounded-full tracking-wider transition-colors duration-700 hover:bg-[#A4193D] hover:text-white'>
        HOME
      </Link>
      <Link
        aria-label='menu link'
        href='/menu'
        className='px-4 py-2 rounded-full tracking-wider transition-colors duration-700 hover:bg-[#A4193D] hover:text-white'>
        MENU
      </Link>
      <Link
        aria-label='cart link'
        href='/cart'
        className='px-4 py-2 rounded-full tracking-wider transition-colors duration-700 hover:bg-[#A4193D] hover:text-white'>
        CART
      </Link>
      <Link
        aria-label='orders link'
        href='/orders'
        className='px-4 py-2 rounded-full tracking-wider transition-colors duration-700 hover:bg-[#A4193D] hover:text-white'>
        ORDERS
      </Link>
    </div>
  );
}

export default DesktopMenu
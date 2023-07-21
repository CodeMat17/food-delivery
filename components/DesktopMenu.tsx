import Link from 'next/link'

const DesktopMenu = () => {
  return (
    <div className='hidden sm:flex space-x-1 transition-colors duration-500'>
      <Link
        href='#'
        className='px-4 py-2 rounded-lg tracking-wider transition-colors duration-700 hover:bg-orange-100'>
        HOME
      </Link>
      <Link
        href='#'
        className='px-4 py-2 rounded-lg tracking-wider transition-colors duration-700 hover:bg-orange-100'>
        MENU
      </Link>
      <Link
        href='#'
        className='px-4 py-2 rounded-lg tracking-wider transition-colors duration-700 hover:bg-orange-100'>
        ORDERS
      </Link>
      <Link
        href='#'
        className='px-4 py-2 rounded-lg tracking-wider transition-colors duration-700 hover:bg-orange-100'>
        CARK
      </Link>
    </div>
  );
}

export default DesktopMenu
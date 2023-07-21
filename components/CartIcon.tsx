import Link from 'next/link'
import { TiShoppingCart } from 'react-icons/ti'

const CartIcon = () => {
  return (
    <Link href='/cart' className='flex gap-4 items-center'>
          <TiShoppingCart />
          <span>CART (3)</span>
    </Link>
  );
}

export default CartIcon
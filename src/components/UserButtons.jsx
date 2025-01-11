// REACT
import { useContext, useState } from 'react';
import { CartContext, getAmoutOfItemsInCart } from '../contexts/CartContext';
//REACT ICONS
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
// ROUTERS
import { Link } from 'react-router-dom';

const UserButtons = () => {
  const cartInfo = useContext(CartContext);
  const [amountOfItems, setAmoutOfItems] = useState(0);
  return (
    <div className='flex'>
      <button
        className='px-5 relative hover:translate-y-[-3px] transition duration-300 '
        onClick={() => cartInfo.setIsCartOpen(true)}
      >
        <FaShoppingCart className='hover:text-white transition' />
        {!!amountOfItems && (
          <div
            id='cart-amount'
            className='absolute inline-flex items-center pb-1 justify-center w-6 h-6 font-bold border text-white rounded-full bg-red-500 bottom-3 '
          >
            {amountOfItems}
          </div>
        )}
      </button>
      <Link to='/history'>
        <FaUserAlt className='hover:translate-y-[-3px] hover:text-white transition duration-300' />
      </Link>
    </div>
  );
};

export default UserButtons;

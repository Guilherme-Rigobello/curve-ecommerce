// REACT
import { useContext, useEffect, useState } from 'react';
import { CartContext, getAmountOfItemsInCart } from '../contexts/CartContext';
//REACT ICONS
import { FaShoppingCart } from 'react-icons/fa';
// ROUTERS

const UserButtons = () => {
  const [amountOfItems, setAmountOfItems] = useState(0);
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  useEffect(() => {
    setAmountOfItems(getAmountOfItemsInCart(cartItems));
  }, [cartItems]);

  return (
    <div className='flex'>
      <button
        className='px-5 relative hover:translate-y-[-3px] transition duration-300'
        onClick={() => setIsCartOpen(true)}
      >
        <FaShoppingCart className='hover:text-white transition' />
        {!!amountOfItems && (
          <div
            id='cart-amount'
            className='absolute inline-flex items-center pb-1 justify-center w-8 h-8 font-bold border text-white rounded-full bg-red-500 bottom-3'
          >
            {amountOfItems}
          </div>
        )}
      </button>

    </div>
  );
};

export default UserButtons;

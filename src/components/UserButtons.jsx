//REACT ICONS
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';

const UserButtons = () => {
  return (
    <div className='flex'>
      <button className='px-2 relative'>
        <FaShoppingCart />
        <div
          id='cart-amount'
          className='absolute inline-flex items-center pb-1 justify-center w-6 h-6 font-bold border text-white rounded-full bg-red-500 bottom-3 -right-2'
        >
          3
        </div>
      </button>
      <a href='' className='px-2'>
        <FaUserAlt />
      </a>
    </div>
  );
};

export default UserButtons;

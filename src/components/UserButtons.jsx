//REACT ICONS
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
// ROUTERS
import { Link } from 'react-router-dom';

const UserButtons = () => {
  return (
    <div className='flex'>
      <button className='px-5 relative hover:translate-y-[-3px] transition duration-300 '>
        <FaShoppingCart className='hover:text-white transition' />
        <div
          id='cart-amount'
          className='absolute inline-flex items-center pb-1 justify-center w-6 h-6 font-bold border text-white rounded-full bg-red-500 bottom-3 '
        >
          3
        </div>
      </button>
      <Link to='/history'>
        <FaUserAlt className='hover:translate-y-[-3px] hover:text-white transition duration-300' />
      </Link>
    </div>
  );
};

export default UserButtons;

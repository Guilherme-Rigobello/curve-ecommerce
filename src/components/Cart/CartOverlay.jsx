import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
// ICONS
import { MdClose } from 'react-icons/md';
import { TiInputChecked } from 'react-icons/ti';
// COMPONENT
import CartProducts from './CartProducts';
import TotalPriceCell from './TotalPriceCell';

const CartOverlay = () => {
  const cartInfo = useContext(CartContext);
  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 flex justify-end z-50 ease-in-out duration-500 ${
        cartInfo.isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <section
        onClick={() => cartInfo.setIsCartOpen(false)}
        id='outside'
        className='w-3/4 bg-slate-950 opacity-50'
      ></section>
      <section
        id='cart'
        className='w-1/4 bg-slate-950 min-w-80 border-l-2 border-slate-300 p-5 flex flex-col text-white px-10'
      >
        <div className='flex justify-between items-center mt-3 border-b mb-10'>
          <p className='text-lg mb-2'>Minha Sacola</p>
          <button
            onClick={() => cartInfo.setIsCartOpen(false)}
            className='mb-2 text-3xl hover:translate-y-[-1px] transition-all duration-300 hover:text-white'
            aria-label='Fechar sacola'
          >
            <MdClose />
          </button>
        </div>
        <CartProducts />
        <TotalPriceCell/>
        <Link
          className='flex items-center justify-center pb-2 mt-10 text-white relative group'
          to='/checkout'
        >
          <span className='pe-1 text-3xl'>
            <TiInputChecked />
          </span>
          Finalizar Compra
          <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
        </Link>
      </section>
    </div>
  );
};

export default CartOverlay;

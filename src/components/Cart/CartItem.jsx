// utils
import { catalogIndexedById } from '../../utils/catalog';
// context
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
// icons
import { RiSubtractLine, RiAddLine, RiCloseFill } from 'react-icons/ri';

const CartItem = ({ id, amount }) => {
  const { addToCart, OutToCart, removeFromCart } = useContext(CartContext);
  const { name, price, image } = catalogIndexedById[id];
  return (
    <article className='flex bg-stone-100 p-1 border rounded-sm relative'>
      <img
        src={image}
        alt={`Imagem do produto ${id}, ${name}.`}
        className='h-24'
      />
      <button
        onClick={() => removeFromCart(id)}
        className='text-right text-l absolute top-2 right-2 text-slate-950 text-xl '
      >
        <RiCloseFill />
      </button>
      <div className='flex flex-col justify-around mx-2 gap-3'>
        <p className='text-slate-950 text-sm mt-2 font-medium'>{name}</p>
        <p className='text-slate-400 text-sm'>Tamanho M</p>
        <p className='text-green-700 text-sm font-semibold'>R$ {price}</p>
        <div className='flex text-slate-950 absolute right-2 bottom-0 '>
          <button
            onClick={() => OutToCart(id)}
            className='border border-slate-600 rounded-full hover:border-slate-900 transition-all duration-300 mb-2 me-2 p-1'
          >
            <RiSubtractLine />
          </button>
          <p className='mx-auto'>{amount}</p>
          <button
            onClick={() => addToCart(id)}
            className='border border-slate-600 rounded-full hover:border-slate-900 transition-all duration-300 mb-2 ml-2 p-1'
          >
            <RiAddLine />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;

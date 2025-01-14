import { FaCartPlus } from 'react-icons/fa';
// Context
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const ProductCard = ({ id, name, brand, image, feminine, price }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <article className='flex flex-col justify-around border-2 border-gray-200 rounded-lg card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 overflow-hidden'>
      <img
        src={image}
        alt={`Product Image: ${id}`}
        className='group-hover:scale-110 transition duration-300 rounded-lg mx-4 my-3 cursor-pointer'
      />
      <p className='mx-4 text-sm text-slate-400'>{brand}</p>
      <p className='mx-4 text-sm'>{name}</p>
      <p className='mx-4 text-sm text-green-900 font-semibold pb-3'>
        R$ {price}
      </p>
      <button
        onClick={() => addToCart(id)}
        className='flex justify-center bg-slate-950 border border-transparent rounded-sm mx-4 my-3 p-2 text-md text-slate-100 hover:bg-transparent hover:text-slate-950 hover:border hover:border-slate-950 transition duration-200'
      >
        <FaCartPlus />
      </button>
    </article>
  );
};

export default ProductCard;

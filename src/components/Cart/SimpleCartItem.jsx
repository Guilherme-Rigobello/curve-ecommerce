// utils
import { catalogIndexedById } from '../../utils/catalog';

const SimpleCartItem = ({ id, amount }) => {
  const { name, price, image } = catalogIndexedById[id];
  return (
    <article className='flex bg-stone-100 p-1 border rounded-sm relative'>
      <img
        src={image}
        alt={`Imagem do produto ${id}, ${name}.`}
        className='h-24'
      />
      <div className='flex flex-col justify-around mx-2 gap-3'>
        <p className='text-slate-950 text-sm mt-2 font-medium'>{name}</p>
        <p className='text-slate-400 text-sm'>Tamanho M</p>
        <p className='text-green-700 text-sm font-semibold'>R$ {price}</p>
        <div className='flex text-slate-950 absolute right-2 bottom-0 '>
          <p className='mx-auto'>{amount}</p>
        </div>
      </div>
    </article>
  );
};

export default SimpleCartItem;

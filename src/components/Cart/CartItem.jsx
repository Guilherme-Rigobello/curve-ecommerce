import { RiSubtractLine, RiAddLine, RiCloseFill } from 'react-icons/ri';

const CartItem = () => {
  return (
    <article className='flex bg-stone-100 p-1 border rounded-sm relative'>
      <img src='' alt='' className='h-24' />
      <button className='text-right text-l absolute top-2 right-2 text-slate-950 text-xl '>
        <RiCloseFill />
      </button>
      <div className='flex flex-col justify-around mx-2 gap-3'>
        <p className='text-slate-950 text-sm mt-2 font-medium'>Nome</p>
        <p className='text-slate-400 text-sm'>Tamanho M</p>
        <p className='text-green-700 text-sm font-semibold'>Preço</p>
        <div className='flex text-slate-950 absolute right-2 bottom-0 '>
          <button className='border border-slate-600 rounded-full hover:border-slate-900 transition-all duration-300 mb-2 me-2 p-1'>
            <RiSubtractLine />
          </button>
          <p className='mx-auto'>2</p>
          <button className='border border-slate-600 rounded-full hover:border-slate-900 transition-all duration-300 mb-2 ml-2 p-1'>
            <RiAddLine />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;

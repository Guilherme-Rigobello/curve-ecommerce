import { useState } from 'react';

const CartOverlay = () => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 flex justify-end z-50 ease-in-out duration-500 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <section
        onClick={() => setIsCartOpen(false)}
        id='outside'
        className='w-3/4 bg-slate-950 opacity-50'
      ></section>
      <section
        id='cart'
        className='w-1/4 bg-slate-950 min-w-80 border-l-2 border-slate-300 p-5 flex flex-col justify-between text-white'
      ></section>
    </div>
  );
};

export default CartOverlay;

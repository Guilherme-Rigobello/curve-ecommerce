const ProductsFilters = () => {
  return (
    <section className='flex justify-center items-center py-8'>
      <input
        id='filter-0'
        type='radio'
        name='filter-selection'
        className='hidden'
      />
      <label
        htmlFor='filter-0'
        className='bg-slate-950 border border-transparent rounded-s-md p-2 text-md text-slate-100 hover:bg-transparent cursor-pointer hover:text-slate-950 hover:border hover:border-slate-950 transition duration-200'
      >
        Todos
      </label>
      <input
        id='filter-1'
        type='radio'
        name='filter-selection'
        className='hidden'
      />
      <label
        htmlFor='filter-1'
        className='bg-slate-950 border border-transparent p-2 mx-[1px] text-md text-slate-100 hover:bg-transparent cursor-pointer hover:text-slate-950 hover:border hover:border-slate-950 transition duration-200'
      >
        Masculino
      </label>
      <input
        id='filter-2'
        type='radio'
        name='filter-selection'
        className='hidden'
      />
      <label
        htmlFor='filter-2'
        dir="rtl"
        className='bg-slate-950 border border-transparent rounded-s-md p-2 text-md text-slate-100 hover:bg-transparent cursor-pointer hover:text-slate-950 hover:border hover:border-slate-950 transition duration-200'
      >
        Feminino
      </label>
    </section>
  );
};

export default ProductsFilters;

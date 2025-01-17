import CartItem from './CartItem';

const CartProducts = () => {
  return (
    <section className='flex flex-col justify-start overflow-auto gap-2'>
      <CartItem />
    </section>
  );
};

export default CartProducts;

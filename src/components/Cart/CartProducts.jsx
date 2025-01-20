import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import SimpleCartItem from './SimpleCartItem';

const CartProducts = ({ isHomePage = true }) => {
  const { cartItems } = useContext(CartContext);
  const cartItemsArray = [];

  for (const itemId in cartItems) {
    cartItemsArray.push({ id: Number(itemId), amount: cartItems[itemId] });
  }

  return (
    <section
      className={`flex flex-col justify-start overflow-auto gap-2 ${
        isHomePage ? 'h-3/5' : ''
      }`}
    >
      {cartItemsArray.map((product) => {
        return isHomePage ? (
          <CartItem {...product} key={`key_${product.id}`} />
        ) : (
          <SimpleCartItem {...product} key={`key_${product.id}`} />
        );
      })}
    </section>
  );
};

export default CartProducts;

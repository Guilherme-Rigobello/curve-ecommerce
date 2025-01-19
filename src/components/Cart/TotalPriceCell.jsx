import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { catalogIndexedById } from '../../utils/catalog';
//icon
import { MdOutlinePriceCheck } from 'react-icons/md';

function calculateTotalPrice(cartObject) {
  let price = 0;
  for (const cartItemId in cartObject) {
    price += catalogIndexedById[cartItemId].price * cartObject[cartItemId];
  }
  return price;
}

const TotalPriceCell = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = calculateTotalPrice(cartItems)
  return (
    <section className='flex items-center justify-center pb-2 mt-auto'>
      <p className='pe-1 '>
        Total Avaliado:
      </p>
      <p className='font-bold text-lg'>R$ {totalPrice},00</p>
    </section>
  );
};

export default TotalPriceCell;
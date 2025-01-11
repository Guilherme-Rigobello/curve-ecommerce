import { createContext } from 'react';

export const CartContext = createContext(null);

export const getAmoutOfItemsInCart = (cartItemsObj) => {
  var amount = 0;
  for (const productId in cartItemsObj) {
    amount += cartItemsObj[productId];
  }
  return amount;
};

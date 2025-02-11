//COMPONENTS/PAGES
import Header from './components/Header';
import Checkout from './pages/CheckoutPage/Checkout';
import Home from './pages/HomePage/Home';

//CONTEXTS
import { CartContext } from './contexts/CartContext';
// ROUTERS
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productId];
    setCartItems(cartItemsCopy);
  };

  const addToCart = (productId) => {
    setCartItems({
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    });
  };

  const OutToCart = (productId) => {
    if (cartItems[productId] > 1) {
      setCartItems({
        ...cartItems,
        [productId]: cartItems[productId] - 1,
      });
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addToCart,
        OutToCart,
        removeFromCart,
      }}
    >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </CartContext.Provider>
  );
};

export default App;

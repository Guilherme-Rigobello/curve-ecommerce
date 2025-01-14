//COMPONENTS/PAGES
import Header from './components/Header';
import Home from './pages/HomePage/Home';
import Checkout from './pages/CheckoutPage/Checkout';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory';
//CONTEXTS
import { CartContext } from './contexts/CartContext';
// ROUTERS
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    const updatedCart = {
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    };
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, addToCart }}
    >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
};

export default App;

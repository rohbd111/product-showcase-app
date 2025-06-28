import { useState, useContext, createContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const cartCount = cart.length;
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

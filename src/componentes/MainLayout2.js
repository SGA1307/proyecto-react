import React, { useState } from 'react';
import Carrusel from './Carrusel/Carrusel';
import ShoppingCart from './body/shoppingcart';
import CardList from './body/CardList';
import Header2 from'./header/header2';

const MainLayout = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false); // Controlar la visibilidad del carrito
  const [cart, setCart] = useState([]); // Estado para el contenido del carrito

  const clearCart = () => {
    setCart([]); // Reinicia el carrito dejándolo vacío
  };

  
  // Alternar visibilidad del carrito
  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };
  const getTotalItemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Función para añadir productos al carrito
  const addToCart = (idProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.product_id === idProduct);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.product_id === idProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product_id: idProduct, quantity: 1 }];
      }
    });
  };

  // Función para actualizar la cantidad de productos
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        // Si la cantidad es cero, elimina el producto del carrito
        return prevCart.filter((item) => item.product_id !== productId);
      } else {
        // Si la cantidad es mayor a cero, actualiza la cantidad
        return prevCart.map((item) =>
          item.product_id === productId
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
    });
  };

  return (
    <div>
      <Header2 onCartClick={toggleCartVisibility} cartItemCount={getTotalItemsInCart()}/>
      <Carrusel />
      <CardList onAddToCart={addToCart} />

      {children}

      {/* ShoppingCart recibe la función para actualizar la cantidad */}
      <ShoppingCart 
        cart={cart}
        isVisible={isCartVisible}
        onClose={() => setIsCartVisible(false)}
        updateQuantity={updateQuantity} // Se pasa la función para actualizar cantidad
        clearCart={clearCart} // Pasar la función para vaciar el carrito

      />
    </div>
  );
};

export default MainLayout;

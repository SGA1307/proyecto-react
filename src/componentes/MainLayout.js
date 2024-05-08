import React, { useState } from 'react';
import Header from './header/Header';
import Carrusel from './Carrusel/Carrusel';
import ShoppingCart from './body/shoppingcart';
import CardList from './body/CardList';
import VistaProductoModal from './body/vistaproducto';

const MainLayout = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false); // Controlar la visibilidad del carrito
  const [cart, setCart] = useState([]); // Estado para el contenido del carrito
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

  const clearCart = () => {
    setCart([]); // Reiniciar el carrito
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev); // Alternar la visibilidad del carrito
  };

  const getTotalItemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0); // Contar ítems en el carrito
  };

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.product_id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.product_id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product_id: productId, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        return prevCart.filter((item) => item.product_id !== productId);
      } else {
        return prevCart.map((item) =>
          item.product_id === productId
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
    });
  };

  const openProductModal = (product) => {
    setSelectedProduct(product); // Abrir el modal con el producto seleccionado
  };

  const closeProductModal = () => {
    setSelectedProduct(null); // Cerrar el modal
  };

  return (
    <div>
      <Header onCartClick={toggleCartVisibility} cartItemCount={getTotalItemsInCart()} />
      <Carrusel />
      <CardList onAddToCart={addToCart} onProductClick={openProductModal} /> {/* Configurar para abrir el modal */}
      
      {selectedProduct && (
        <VistaProductoModal producto={selectedProduct} onClose={closeProductModal} /> 
      )}
      
      {children} 

      <ShoppingCart
        cart={cart}
        isVisible={isCartVisible}
        onClose={toggleCartVisibility}
        updateQuantity={updateQuantity} 
        clearCart={clearCart} 
      />
    </div>
  );
};

export default MainLayout;
//aqui///
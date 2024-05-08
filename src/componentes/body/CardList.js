import React from 'react';
import Cards from './Cards'; // Componente que muestra tarjetas de productos
import data from './data'; // Datos de productos

const CardList = ({ onAddToCart }) => {
  return (
    <div className="divCards">
      {data.map((item) => (
        <Cards key={item.id} item={item} onAddToCart={onAddToCart} /> // Pasar onAddToCart a Cards
      ))}
    </div>
  );
};

export default CardList; // Exportar el componente para su uso en MainLayout

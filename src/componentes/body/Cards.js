import React, { useState } from 'react';
import './card.css';
import VistaProductoModal from './vistaproducto'; // Importar el componente del modal

const Cards = ({ item, onAddToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controlar la apertura del modal

  return (
    <div className="listProduct">
      <div className="item">
        <img src={item.image} alt="Producto" />
        <div className="top">
          <h2>{item.title}</h2>
          <h6>{item.precio}</h6>
          <div className="btnVA">
            <button
              type="button"
              className="Show"
              onClick={() => setIsModalOpen(true)} // Abrir el modal al hacer clic
            >
              Ver
            </button>
            <button
              type="button"
              className="addCart"
              onClick={() => onAddToCart(item.id)} // Añadir al carrito
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <VistaProductoModal
          producto={item}
          onClose={() => setIsModalOpen(false)} // Cerrar el modal
        />
      )}
    </div>
  );
};

export default Cards;

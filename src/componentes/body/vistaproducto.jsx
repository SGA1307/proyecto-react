import React from 'react';
import './vista.css';

const VistaProductoModal = ({ producto, onClose }) => {
  if (!producto) {
    return null; // No mostrar nada si no hay producto
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{producto.title}</h2>
        <img
          src={producto.image}
          alt={producto.title}
          className="producto-imagen" // Clase para centrar la imagen
        />
        <b><h4>Precio: {producto.precio}</h4></b>
        {/* Puedes agregar más detalles del producto aquí */}
      </div>
    </div>
  );
};

export default VistaProductoModal;

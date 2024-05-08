import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Importa el CSS para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/registro">Registrarse</Link>
          <Link to="/login">Iniciar sesión</Link>
        </div>
        
        <div className="footer-info">
          <p>&copy; 2024 No se. Todos los derechos reservados.</p>
          <p>Contacto: info@gmail.com</p>
          <p>Teléfono: +123 456 7891</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

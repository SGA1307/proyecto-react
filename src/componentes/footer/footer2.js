import React from "react";
import "./footer.css"; // Importa el CSS para el segundo footer
import { FaGithub, FaDiscord, FaSlack, FaTelegram } from "react-icons/fa"; // Íconos de redes sociales

const SecondFooter = () => {
  return (
    <footer className="second-footer">
      <div className="second-footer-container">
        <div className="second-footer-description">
          <p>
            En nuestra comunidad, creemos en la colaboración y el aprendizaje
            mutuo. Estamos aquí para ayudarte a crecer y conectarte con otros.
            Gracias por ser parte de nuestra familia.
          </p>
        </div>

        <div className="second-footer-contact">
          <p>Contacto para soporte: soporte@otraempresa.com</p>
          <p>Teléfono de soporte: +321 654 9871</p>
          <p>Ubicación: 456 Avenida Secundaria, Ciudad, País</p>
        </div>
        <div className="second-footer-social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
            <FaSlack />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SecondFooter;

import React from 'react';
import "slick-carousel/slick/slick.css"; // Importar estilos de Slick
import "slick-carousel/slick/slick-theme.css"; // Importar tema de Slick
import Slider from "react-slick"; // Importar el componente de Slick
import imagenesCarrusel from './imagenesCarrusel'; // Importar las imágenes
import './carrusel.css'; // Cualquier estilo personalizado

function Carrusel() {
  const settings = {
    infinite: true, // Habilita desplazamiento infinito
    speed: 1000, // Velocidad de transición
    slidesToShow: 2, // Muestra dos imágenes por parte
    slidesToScroll: 2, // Desliza dos imágenes a la vez
    autoplay: true, // Habilitar reproducción automática
    autoplaySpeed: 3000, // Intervalo de cambio de imagen (3 segundos)
    arrows: true, // Habilitar flechas de control
    pauseOnHover: false, // Detener la reproducción automática cuando se pasa el mouse por encima
  };

  return (
    <div className="container-fluid" style={{ marginTop: '20px' }}>
      <Slider {...settings}>
        {imagenesCarrusel.map((item) => (
          <div key={item.id} className="carousel-item">
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.descripcion}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrusel;

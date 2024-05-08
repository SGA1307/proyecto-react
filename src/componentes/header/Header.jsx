import React from "react";
import "./header.css";
import Cart from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import "../MainLayout"


const Header = ({ onCartClick, cartItemCount  }) => {

  return (
    <div className="contenedor">
      <img src="logo.jpg" className="logo" alt="logo" />

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <b>Inicio</b><span className="sr-only"></span>
            </a>
          </li>

          <li className="nav-item">
            <Link to="/registro" className="nav-link">
              <b>Registrarse</b>
            </Link>
          </li>

          <li className="nav-item" style={{paddingRight: "130px"}}>
            <Link to="/login" className="nav-link">
              <b>Iniciar sesión</b>
            </Link>
          </li>

          <select name="selector" placeholder="">
            <option value="1">Seleccione una categoria</option>
          </select>
          <div className="Cart" >
          <Cart name="cart-shopping" onClick={onCartClick} ></Cart>
          <span>{cartItemCount}</span>
        </div>
        </ul>


      </nav>
    </div>
  );
}

export default Header;

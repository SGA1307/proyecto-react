import React, { useEffect, useState } from "react";
import "./header.css";
import Cart from "@mui/icons-material/AddShoppingCart";
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';

// Importa el JSON de usuarios
import usuariosRegistrados from '../usuariosRegistrados.json';

const Header = ({ onCartClick, cartItemCount }) => {
    const [nombre, setNombre] = useState(''); // Estado para el nombre del usuario

    useEffect(() => {
        // Obtén el correo electrónico del usuario desde las cookies
        const email = Cookie.get('email');

        if (email) {
            // Encuentra el usuario en el JSON por correo electrónico
            const usuario = usuariosRegistrados.find(
                (u) => u.email === email
            );

            if (usuario) {
                setNombre(usuario.nombres); // Establece el nombre en el estado
            } else {
                console.warn('Usuario no encontrado');
            }
        } else {
            // Si no hay correo, redirige al login
            window.location.hash = '/login';
        }
    }, []); // Solo se ejecuta al cargar el componente

    const cerrarSesion = () => {
        Swal.fire({
            title: "¿Está seguro que desea cerrar la sesión?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                // Elimina las cookies al cerrar sesión
                Cookie.remove('email', { path: "/" });
                Cookie.remove('name', { path: "/" });
                window.location.hash = '/login'; // Redirige al login
            }
        });
    };

    return (
        <div className="contenedor">
            <img src="logo.jpg" className="logo" alt="logo" />

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <h4 style={{ paddingLeft: "40px" }}>
                        Bienvenido, {nombre || "Usuario"} {/* Usa 'Usuario' como valor por defecto */}
                    </h4>

                    <select name="selector" style={{ marginLeft: "100px" }}>
                        <option value="1">Seleccione una categoría</option>
                    </select>

                    <div className="Cart">
                        <Cart name="cart-shopping" onClick={onCartClick} />
                        <span>{cartItemCount}</span>
                    </div>
                </ul>

                <button className="CerrarSesion" onClick={cerrarSesion}>Cerrar sesión</button>

            </nav>
        </div>
    );
};

export default Header;

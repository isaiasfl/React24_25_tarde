import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const Navbar = () => {
  /**
   * NavLink se utiliza para movernos entre rutas
   * Navlink añade "active" a className cuando la ruta es la actual (V7 de router dom)
   * isActive --> es una prop de react router dom que me dice si la ruta está
   * activa
   *
   */

  return (
    <nav
      className="bg-gradient-to-tr from-gray-500
      to-pink-500 shadow-lg p-4"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="space-x-4">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              `text-white hover:text-red-600 ${isActive ? "font-bold" : ""}`
            }
          >
            Inicio APP
          </NavLink>

          <NavLink to={ROUTES.SEARCH} className="text-white text-2xl font-bold">
            Buscar
          </NavLink>

          <NavLink
            to={ROUTES.FAVORITES}
            className="text-white text-2xl font-bold"
          >
            Favoritos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

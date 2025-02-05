import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLayout = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="flex h-screen">
      {/* // Sidebar de móvil. */}
      <div className="lg:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* aside lateral */}
      <div>
        <aside className="fixed lg:static w-64 bg-gray-800 h-full  hidden lg:block transform transition-transform flex flex-col">
          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/admin"
              className="block p-2 text-white hover:text-amber-700"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/users"
              className="block p-2 text-white  hover:text-amber-700"
            >
              Users
            </NavLink>
            <NavLink
              to="/admin/products"
              className="block p-2 text-white  hover:text-amber-700"
            >
              Productos
            </NavLink>
            <NavLink
              to="/admin/settings"
              className="block p-2 text-white  hover:text-amber-700"
            >
              Settings
            </NavLink>
          </nav>
          <div className="p-4 border-t border-gray-700 ">
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white p-2 rounded
            hover:bg-red-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </aside>
      </div>
      {/* Contenido  principal*/}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const handleLogout = () => {
    // Implementar lógica de cerrar sesión

    logOut();
    navigate("/");
  };

  return (
    <>
      <div>DashboardPage PROTEGIDO</div>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  );
};

export default DashboardPage;

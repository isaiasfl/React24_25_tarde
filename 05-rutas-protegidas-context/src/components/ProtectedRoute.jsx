import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // lo mando a la pagina de login /
    return <Navigate to="/" replace={true} />;
  }
  // si puedes pasar
  return children;
};

export default ProtectedRoute;

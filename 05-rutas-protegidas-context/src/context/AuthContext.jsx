import { createContext, useContext, useState } from "react";

// creo el contexto
const AuthContext = createContext(null);
// creo el provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // hacer login
  // simulo el login, si existe una token en el localStorage con valor true, entonces el usuario esta logueado
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(true));
  };
  // hacer logout
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.remove("token");
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// creo un hook personalizado para exportar el contexto

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

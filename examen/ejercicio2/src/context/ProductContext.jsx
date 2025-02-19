import { createContext, useContext, useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
// crear el contexto
const ProductContext = createContext();
// crear el provider
export const useProducts=()=>{
  const context=useContext(ProductContext);
  
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
}
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{products,loading,error,setLoading, setError}}>{children}</ProductContext.Provider>
  );
};


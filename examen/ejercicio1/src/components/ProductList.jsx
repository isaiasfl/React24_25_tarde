import React, { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
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
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div>Error haciendo el fetching: {error.message}</div>
  }
  return (
    <div>
      <h1>Product List</h1>
      <p>Here you can find all our products.</p>
      {loading ? (
        <p>Cargando los datos</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

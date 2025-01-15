import { useEffect, useState } from "react";
import LiCartProduct from "./LiCartProduct";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalCarrito, setTotalCarrito] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5173/src/data/db.json");
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      setProducts(await response.json());
    } catch (error) {
      console.log("Error fetching ", error);
    }
  };

  const addCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

    // setTotalCarrito((prevCart) => totalCart(prevCart));
    console.log(() => totalCart(cart));
  };

  const totalCart = (carrito) => {
    // debe recorrer el array CARRITO y sumar los precios de los productos
    return carrito.reduce((acc, product) => acc + product.price, 0);
  };

  const removeCart = (product) => {};

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Lista de Libros
      </h1>
      {/* Div que PINTA las tarjetas productsCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addCart={addCart} />
        ))}
      </div>
      {/* Div que PINTA el carrito de libros */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Carrito de Compras
        </h2>
        <p className="text-xl font-semibold text-center mb-6">
          Total carrito: {totalCarrito}
        </p>
        {/* si el carrito está vacío, renderizo  el párrafo p y si no 
         renderizo el ul con los libros del carrito */}
        {cart.length === 0 ? (
          <p>carrito vacío</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <LiCartProduct key={index} product={product} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductList;

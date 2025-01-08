import { useState } from "react";

const Contador = () => {
  // hooks
  const [contador, setContador] = useState(0);

  // variables

  // funciones

  const handleClick = (numero) => {
    if (numero > 0) {
      // Si el número es positivo, siempre se puede sumar.
      setContador((prevContador) => prevContador + numero);
    } else if (numero < 0 && contador > 0) {
      // Si el número es negativo, solo se resta si el contador es mayor que 0.
      setContador((prevContador) => prevContador + numero);
    }

    // Otra forma de hacerlo
    // setContador((prevContador) =>
    //   numero > 0 || (numero < 0 && prevContador > 0)
    //     ? prevContador + numero
    //     : prevContador
    // );
  };
  return (
    <>
      <div className="max-w-sm mx-auto mt-8 p-6 bg-gray-200 shadow-sm rounded-md">
        <h1 className="text-3xl font-bold mb-5 text-center ">
          {" "}
          Ejemplo contador
        </h1>
        <p className="text-2xl text-center text-blue-500 font-semibold">
          {contador}
        </p>
        <div className="flex justify-center mt-5 gap-4">
          <button
            onClick={() => handleClick(1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Aumentar
          </button>
          <button
            onClick={() => handleClick(-1)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disminuir
          </button>
        </div>
      </div>
    </>
  );
};

export default Contador;

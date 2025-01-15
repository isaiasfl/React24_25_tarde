import papelera from "../../assets/borrar.png";
import Button from "./Button";

const LiCartProduct = (props) => {
  const { product, index, removeCart } = props;
  return (
    <li
      className="bg-gray-100 shadow-lg rounded-lg
      p-6 flex flex-grow justify-between mb-10"
      key={index}
    >
      <span className="text-xl text-blue-500 font-semibold">
        {product.title}
      </span>
      <span className="text-2xl text-green-800 font-semibold">
        {product.price.toFixed(2)}
      </span>
      <button
        className="flex items-center bg-red-400 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-all"
        onClick={() => removeCart(product.id)}
      >
        <img
          src={papelera}
          alt="papelera"
          className="w-6 h-6 inline-block mr-2"
        />
        <span className="hidden md:inline">Quitar</span>
      </button>

      {/*  también se puede hacer con el componente Button que he programado. */}

      {/* <Button
        className="bg-slate-600 hover:bg-slate-900 px-4 py-2 rounded-lg text-white"
        onClick={() => removeCart(product.id)}
      >
        Quitar del carrito
      </Button> */}
    </li>
  );
};

export default LiCartProduct;

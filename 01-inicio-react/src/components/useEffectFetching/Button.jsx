import carrito from "../../assets/compras.png";
const Button = (props) => {
  const { className, onClick } = props;
  return (
    <>
      <button className={className} onClick={onClick}>
        <img
          src={carrito}
          alt="carrito"
          className="w-6 h-6 inline-block mr-4"
        />
        {props.children}
      </button>
    </>
  );
};

export default Button;

function Hijo(props) {
  const { info,handleClickEdad } = props;
  return (
    <>
      <div>Eres hijo de {info.nombre}</div>
      <div>
        <button onClick={handleClickEdad}>Aumentar edad desde HIJO</button>
      </div>
    </>
  );
}

export default Hijo;

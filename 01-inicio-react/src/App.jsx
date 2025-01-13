import { useState } from "react";
import Contador from "./components/Contador";
import Hijo from "./components/parametros/Hijo";
import Padre from "./components/parametros/Padre";
const initaStateInfo = { nombre: "Isaías", edad: 15, isAdmin: false };

const App = () => {
  const [info, setInfo] = useState(initaStateInfo);
  const handleClickEdad = () => {
    setInfo((prevInfo) => ({ ...prevInfo, edad: prevInfo.edad + 1 }));
  };
  return (
    <>
      {/* <div>adios</div>
      <div>Hola Mundo</div>
      <Contador /> */}
      <p>El nombre es: {info.nombre}</p>
      <p>La edad es: {info.edad}</p>
      <Padre info={info} setInfo={setInfo} handleClickEdad={handleClickEdad}>
        <Hijo info={info} handleClickEdad={handleClickEdad} />
      </Padre>
    </>
  );
};

export default App;

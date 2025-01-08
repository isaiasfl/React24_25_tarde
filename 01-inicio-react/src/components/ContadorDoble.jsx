import { useState } from "react";

const ContadorDoble = () => {
  // hooks
  const [friends, setFriends] = useState({
    Juan: 0,
    Carlos: 0,
    Maria: 0,
  });

  // variables

  // funciones
  function handleClickLike(nombre, likes) {
    setFriends((preValue) => {
      return { ...preValue, [nombre]: preValue[nombre] + likes };
    });
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-5 text-center ">
        Contador de Likes de mis amigos
      </h1>
      <div className="text-center mt-4">
        <span>
          Juan tiene <strong> {friends.Juan} </strong>likes
        </span>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => handleClickLike("Juan", 1)}
          >
            Like
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            onClick={() => handleClickLike("Juan", -1)}
          >
            Dislike
          </button>
        </div>
        <span>
          María tiene <strong> {friends.Maria} </strong>likes
        </span>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => handleClickLike("Maria", 1)}
          >
            Like
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            onClick={() => handleClickLike("Maria", -1)}
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContadorDoble;

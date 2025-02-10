import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const result = await fetchFunction();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // abortController es un objeto que me permite abortar una petición fetch
    const abortController = new AbortController();
    // me pongo en modo de carga
    setLoading(true);
    // llamo a la función que me pasan por parámetro
    fetchData();
    // limpio los errores
    setError(null);

    return()=>{
      // lo que ejecutemos aquí se ejecutará cuando el componente se desmonte
      abortController.abort();
    }
  }, dependencies);

  return { data, loading, error };
};

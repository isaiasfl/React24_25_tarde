const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

// TAMAÑOS de las imágenes
export const SIZE = {
  POSTER: "w500",
  ORIGINAL: "original",
};

// Función para hacer fetch a la API URL, opciones
const fetchFromAPI = async (endpoint, options = {}) => {
  try {
    //https://api.themoviedb.org/3/movie/popular?api_key=8930572ca461d9b58d8f05f72d6f419a&language=es-ES
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(
        options
      )}`
    );
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para obtener las películas populares
export const getPopularMovies = async () => {
  return await fetchFromAPI("/movie/popular");
};

export const getMovieDetail = async (id) => {
  return await fetchFromAPI(`/movie/${id}`);
};

export const getImageURL = (path, size = SIZE.POSTER) => {
  return `${BASE_IMAGE_URL}/${size}${path}`;
};

export const getMovieVideos = async (id) => {
  return await fetchFromAPI(`/movie/${id}/videos`);
};

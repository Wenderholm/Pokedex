import axios from "axios";

const BASE_URL = "http://localhost:3001/favourites";

export const getFavourites = () => {
  return axios.get(BASE_URL);
};

export const addFavourite = (pokemon) => {
  return axios.post(BASE_URL, pokemon);
};

export const removeFavourite = (favouriteId) => {
  return axios.delete(`${BASE_URL}/${favouriteId}`);
};

import axios from "axios";

const BASE_URL = "http://localhost:3001/favourites";

// GET
export const getFavourites = () => {
  return axios.get(BASE_URL);
};

// POST
export const addFavourite = (pokemon) => {
  return axios.post(BASE_URL, pokemon);
};

// DELETE (UWAGA: po ID rekordu!)
export const removeFavourite = (favouriteId) => {
  return axios.delete(`${BASE_URL}/${favouriteId}`);
};

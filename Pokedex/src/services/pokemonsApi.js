import axios from "axios";

const BASE_URL = "http://localhost:3001/pokemons";

// 🔹 wszystkie pokemony z JSON-server (po walkach)
export const getAllBattlePokemons = () => {
  return axios.get(BASE_URL);
};

// 🔹 sprawdzenie czy pokemon istnieje (po pokemonId)
export const getPokemonByPokemonId = (pokemonId) => {
  return axios.get(`${BASE_URL}?pokemonId=${pokemonId}`);
};

// 🔹 create (pierwsza walka)
export const createPokemon = (pokemon) => {
  return axios.post(BASE_URL, pokemon);
};

// 🔹 update (kolejne walki)
export const updatePokemon = (id, pokemon) => {
  return axios.put(`${BASE_URL}/${id}`, pokemon);
};

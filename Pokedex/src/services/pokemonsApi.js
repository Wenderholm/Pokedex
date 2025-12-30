import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

// 🔹 wszystkie pokemony z JSON-server (po walkach)
export const getAllBattlePokemons = () => {
  return api.get("/pokemons");
};

// 🔹 sprawdzenie czy pokemon istnieje (po pokemonId z PokeAPI)
export const findPokemonByPokeApiId = (pokemonId) => {
  return api.get(`/pokemons?pokemonId=${pokemonId}`);
};

// 🔹 create (pierwsza walka)
export const createPokemon = (pokemon) => {
  return api.post("/pokemons", pokemon);
};

// 🔹 update (kolejne walki)
export const updatePokemon = (id, data) => {
  return api.patch(`/pokemons/${id}`, data);
};

// 🔹 get pokemon by record ID (do edytowania)
export const getBattlePokemonById = (id) => {
  return api.get(`/pokemons/${id}`);
};

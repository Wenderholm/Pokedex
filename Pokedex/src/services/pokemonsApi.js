import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getAllBattlePokemons = () => {
  return api.get("/pokemons");
};

export const findPokemonByPokeApiId = (pokemonId) => {
  return api.get(`/pokemons?pokemonId=${pokemonId}`);
};

export const createPokemon = (pokemon) => {
  return api.post("/pokemons", pokemon);
};

export const updatePokemon = (id, data) => {
  return api.patch(`/pokemons/${id}`, data);
};

export const getBattlePokemonById = (id) => {
  return api.get(`/pokemons/${id}`);
};

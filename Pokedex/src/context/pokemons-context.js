import { createContext, useContext } from "react";

export const PokemonsContext = createContext();

export const usePokemons = () => useContext(PokemonsContext);

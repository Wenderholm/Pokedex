import { PokemonsContext } from "./pokemons-context";
import { usePokemonsData } from "../hooks/usePokemonsData";

export const PokemonsProvider = ({ children }) => {
  const pokemonsData = usePokemonsData();

  return (
    <PokemonsContext.Provider value={pokemonsData}>
      {children}
    </PokemonsContext.Provider>
  );
};

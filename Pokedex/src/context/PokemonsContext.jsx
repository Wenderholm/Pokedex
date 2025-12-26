import { createContext, useContext, useState, useEffect } from "react";
import { pokeApi } from "../services/pokeApi";
import { getAllBattlePokemons } from "../services/pokemonsApi";

const PokemonsContext = createContext();

export const usePokemons = () => {
  const context = useContext(PokemonsContext);
  if (!context) {
    throw new Error("usePokemons must be used within PokemonsProvider");
  }
  return context;
};

const TOTAL_POKEMONS = 150;

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mergePokemons = (apiPokemons, battlePokemons) => {
    return apiPokemons.map((apiPokemon) => {
      const battlePokemon = battlePokemons.find(
        (bp) => bp.pokemonId === apiPokemon.id
      );

      if (!battlePokemon) {
        return {
          ...apiPokemon,
          wins: 0,
          loses: 0,
        };
      }

      return {
        ...apiPokemon,
        baseExperience: battlePokemon.baseExperience,
        wins: battlePokemon.wins,
        loses: battlePokemon.loses,
      };
    });
  };

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true);

        // API + JSON-server RÓWNOLEGLE
        const [apiRes, battleRes] = await Promise.all([
          pokeApi.get("/pokemon", { params: { limit: TOTAL_POKEMONS } }),
          getAllBattlePokemons(),
        ]);

        // szczegóły z PokeAPI
        const detailsPromises = apiRes.data.results.map((pokemon) =>
          pokeApi.get(pokemon.url)
        );

        const detailsResponses = await Promise.all(detailsPromises);

        const detailedPokemons = detailsResponses.map((res) => ({
          id: res.data.id,
          name: res.data.name,
          image: res.data.sprites.front_default,
          weight: res.data.weight,
          height: res.data.height,
          baseExperience: res.data.base_experience,
        }));

        // MERGE 🔥
        const mergedPokemons = mergePokemons(detailedPokemons, battleRes.data);
        setPokemons(mergedPokemons);
      } catch (error) {
        console.error(error);
        setError("Błąd pobierania pokemonów");
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, []);

  // Funkcja do znajdowania konkretnego pokemona
  const getPokemonById = (id) => {
    return pokemons.find((pokemon) => pokemon.id === parseInt(id));
  };

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        loading,
        error,
        getPokemonById,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

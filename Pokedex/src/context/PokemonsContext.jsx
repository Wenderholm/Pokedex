import { createContext, useContext, useEffect, useState } from "react";
import { pokeApi } from "../services/pokeApi";
import { getAllBattlePokemons } from "../services/pokemonsApi";

const PokemonsContext = createContext();

const TOTAL_POKEMONS = 150;

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPokemons = async () => {
    setLoading(true);
    setError(null);

    try {
      const [apiRes, battleRes] = await Promise.all([
        pokeApi.get("/pokemon", { params: { limit: TOTAL_POKEMONS } }),
        getAllBattlePokemons(),
      ]);

      // 🔹 API details
      const details = await Promise.all(
        apiRes.data.results.map((p) => pokeApi.get(p.url))
      );

      const apiPokemons = details.map((res) => ({
        id: res.data.id,
        name: res.data.name,
        image: res.data.sprites.front_default,
        weight: res.data.weight,
        height: res.data.height,
        ability: res.data.abilities[0]?.ability.name || "Brak ",
        baseExperience: res.data.base_experience,
      }));

      // 🔹 MERGE API + JSON
      const mergedApiPokemons = apiPokemons.map((apiPokemon) => {
        const battlePokemon = battleRes.data.find(
          (bp) => bp.pokemonId === apiPokemon.id
        );

        return {
          ...apiPokemon,
          wins: battlePokemon?.wins || 0,
          loses: battlePokemon?.loses || 0,
          baseExperience:
            battlePokemon?.baseExperience || apiPokemon.baseExperience,
        };
      });

      // 🔥 DODAJEMY CUSTOM POKÉMONY
      const customPokemons = battleRes.data
        .filter((bp) => bp.pokemonId > TOTAL_POKEMONS)
        .map((bp) => ({
          id: bp.pokemonId,
          name: bp.name,
          image: bp.image,
          weight: bp.weight,
          height: bp.height,
          ability: bp.ability,
          baseExperience: bp.baseExperience,
          wins: bp.wins || 0,
          loses: bp.loses || 0,
          isCustom: true,
        }));

      setPokemons([...mergedApiPokemons, ...customPokemons]);
    } catch (err) {
      console.error(err);
      setError("Błąd pobierania pokemonów");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  // Funkcja do znajdowania pokemona po ID
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
        refreshPokemons: loadPokemons,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
export const usePokemons = () => useContext(PokemonsContext);

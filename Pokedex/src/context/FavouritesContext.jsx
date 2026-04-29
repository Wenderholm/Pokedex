import { useMemo } from "react";
import { usePokemons } from "./pokemons-context";
import { upsertPokemonByPokemonId } from "../services/pokemonsApi";
import { FavouritesContext } from "./favourites-context";

export const FavouritesProvider = ({ children }) => {
  const { pokemons, loading, updatePokemonLocal } = usePokemons();

  const favourites = useMemo(
    () => pokemons.filter((pokemon) => pokemon.isFavorite),
    [pokemons],
  );

  const toggleFavourite = async (pokemon) => {
    const nextIsFavorite = !pokemon.isFavorite;

    updatePokemonLocal(pokemon.id, { isFavorite: nextIsFavorite });

    await upsertPokemonByPokemonId(pokemon.id, {
      name: pokemon.name,
      image: pokemon.image,
      height: pokemon.height,
      weight: pokemon.weight,
      ability: pokemon.ability,
      baseExperience: pokemon.baseExperience,
      wins: pokemon.wins || 0,
      loses: pokemon.loses || 0,
      isFavorite: nextIsFavorite,
    });
  };

  const isFavourite = (pokemonId) => {
    return favourites.some((fav) => fav.id === pokemonId);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        loading,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

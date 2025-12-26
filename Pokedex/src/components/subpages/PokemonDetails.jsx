import { useParams } from "react-router-dom";
import { useFavourites } from "../../context/FavouritesContext";
import { useArena } from "../../context/ArenaContext";
import { usePokemons } from "../../context/PokemonsContext";

const PokemonDetails = () => {
  const { id } = useParams();
  const { getPokemonById, loading } = usePokemons();
  const pokemon = getPokemonById(id);

  const { toggleFavourite, isFavourite } = useFavourites();
  const { addToArena, isInArena, arena } = useArena();

  if (loading) return <p>Ładowanie...</p>;
  if (!pokemon) return null;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base exp: {pokemon.baseExperience}</p>

      <p>Wins: {pokemon.wins}</p>
      <p>Loses: {pokemon.loses}</p>

      {/* ❤️ ULUBIONE */}
      <button onClick={() => toggleFavourite(pokemon)}>
        {isFavourite(pokemon.id)
          ? "❤️ Usuń z ulubionych"
          : "🤍 Dodaj do ulubionych"}
      </button>

      {/* ⚔️ ARENA */}
      <button
        onClick={() => addToArena(pokemon)}
        disabled={isInArena(pokemon.id) || arena.length >= 2}
      >
        {isInArena(pokemon.id)
          ? "Na arenie"
          : `Dodaj do areny (${arena.length}/2)`}
      </button>
    </div>
  );
};

export default PokemonDetails;

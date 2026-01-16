import { useFavourites } from "../../context/FavouritesContext";
import PokemonCard from "../shared/PokemonCard";
import LoadingMessage from "../shared/LoadingMessage";
import { Grid } from "./Home.styled";

const Favourites = () => {
  const { favourites, loading } = useFavourites();

  if (loading) return <LoadingMessage />;

  if (favourites.length === 0) {
    return <p>Nie masz jeszcze ulubionych Pokémonów ❤️</p>;
  }

  return (
    <div>
      <h1>Ulubione Pokémony</h1>
      <Grid>
        {favourites.map((favPokemon) => (
          <PokemonCard
            key={favPokemon.id} // klucz z JSON server ID
            pokemon={{
              id: favPokemon.pokemonId, // używamy pokemonId jako id
              name: favPokemon.name,
              image: favPokemon.image,
              height: favPokemon.height,
              weight: favPokemon.weight,
              ability: favPokemon.ability,
              baseExperience: favPokemon.baseExperience,
              wins: favPokemon.wins || 0,
              loses: favPokemon.loses || 0,
            }}
            battleResult={null}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Favourites;

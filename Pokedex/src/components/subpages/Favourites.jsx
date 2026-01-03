import { useFavourites } from "../../context/FavouritesContext";
import PokemonCard from "../shared/PokemonCard";
import { Grid } from "./Home.styled";

const Favourites = () => {
  const { favourites, loading } = useFavourites();

  if (loading) return <p>Ładowanie...</p>;

  if (favourites.length === 0) {
    return <p>Nie masz jeszcze ulubionych Pokémonów ❤️</p>;
  }

  return (
    <div>
      <h1>Ulubione Pokémony</h1>
      <Grid>
        {favourites.map((favPokemon) => (
          // mozemy wstaiwic zamiast pokemon={favPokemon}
          // pokemon={{id: favPokemon.id, name: favPokemon.name, image: favPokemon.image itd}}
          <PokemonCard key={favPokemon.id} pokemon={favPokemon} />
          //  <PokemonCard key={favPokemon.id} pokemon={{
          //    id: favPokemon.id,
          //    name: favPokemon.name,
          //    image: favPokemon.image,
          //    height: favPokemon.height,
          //    weight: favPokemon.weight,
          //    ability: favPokemon.ability,
          //    baseExperience: favPokemon.baseExperience,
          //    wins: favPokemon.wins,
          //    loses: favPokemon.loses,
          //  }} />
        ))}
      </Grid>
    </div>
  );
};

export default Favourites;

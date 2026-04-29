import { useFavourites } from "../../context/favourites-context";
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
        {favourites.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            battleResult={null}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Favourites;

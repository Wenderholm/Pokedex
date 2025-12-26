import { useFavourites } from "../../context/FavouritesContext";
import PokemonCard from "../../components/PokemonCard";
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
        {favourites.map((fav) => (
          <PokemonCard
            key={fav.id}
            pokemon={{
              id: fav.pokemonId,
              name: fav.name,
              image: fav.image,
              height: fav.height,
              weight: fav.weight,
              baseExperience: fav.baseExperience,
            }}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Favourites;

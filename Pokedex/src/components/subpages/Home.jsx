import { useEffect, useState } from "react";
import { pokeApi } from "../../services/pokeApi";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await pokeApi.get("/pokemon", {
          params: { limit: 10 },
        });

        const detailsPromises = res.data.results.map((pokemon) =>
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

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Błąd pobierania pokemonów", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokemony</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
            <p>Waga: {pokemon.weight}</p>
            <p>Wzrost: {pokemon.height}</p>
            <p>Doświadczenie bazowe: {pokemon.baseExperience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

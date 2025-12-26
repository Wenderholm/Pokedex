import { useState } from "react";
import PokemonCard from "../PokemonCard";
import Pagination from "../Pagination";
import { Grid } from "./Home.styled";
import { usePokemons } from "../../context/PokemonsContext";

const POKEMONS_PER_PAGE = 15;

const Home = () => {
  const { pokemons, loading, error } = usePokemons();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  // 🔍 filtrowanie
  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 paginacja
  const totalPages = Math.ceil(filteredPokemons.length / POKEMONS_PER_PAGE);
  const startIndex = (currentPage - 1) * POKEMONS_PER_PAGE;
  const currentPokemons = filteredPokemons.slice(
    startIndex,
    startIndex + POKEMONS_PER_PAGE
  );

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Pokemony</h1>
      <input
        type="text"
        placeholder="Szukaj Pokémona..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      <Grid>
        {currentPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;

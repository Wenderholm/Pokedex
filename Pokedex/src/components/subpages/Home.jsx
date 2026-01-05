import { useState } from "react";
import PokemonCard from "../shared/PokemonCard";
import Pagination from "../shared/Pagination";
import LoadingMessage from "../shared/LoadingMessage";
import { Grid } from "./Home.styled";
import { usePokemons } from "../../context/PokemonsContext";
import { useAuth } from "../../context/AuthContext";
import { WelcomeWrapper } from "./Home.styled";
import { StyledInput } from "../forms/Form.styled";

const POKEMONS_PER_PAGE = 15;

const Home = () => {
  const { user } = useAuth(); // sprawdzamy czy uzytkownik jest zalogowany
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

  if (loading) return <LoadingMessage />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {user ? (
        <>
          <h1>Pokemony</h1>
          <StyledInput
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
        </>
      ) : (
        <WelcomeWrapper>
          <h1>Witaj w Pokedex!</h1>
          <p>Musisz się zalogować albo zarejestrować, aby zobaczyć pokemony.</p>
        </WelcomeWrapper>
      )}
    </div>
  );
};

export default Home;

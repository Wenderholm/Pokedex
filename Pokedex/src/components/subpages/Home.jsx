import { useEffect, useState } from "react";
import { pokeApi } from "../../services/pokeApi";
import PokemonCard from "../PokemonCard";
import Pagination from "../Pagination";

const POKEMONS_PER_PAGE = 15;
const TOTAL_POKEMONS = 150;

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // pobieranie listy pokemonów z limitem 150 jako parametr
        const res = await pokeApi.get("/pokemon", {
          params: { limit: 150 },
        });
        // console.log("res", res.data.results); -> w res.data.results mamy zapisane
        // wszystkie pokiemony z ich name i url do szczegółów
        // pobieranie szczegółowych danych dla każdego pokemona
        const detailsPromises = res.data.results.map((pokemon) =>
          pokeApi.get(pokemon.url)
        );
        // czekamy na wszystkie odpowiedzi 150 requestów a nastepnie
        // zwracamy je w tablicy detailsResponses
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
        setError("Błąd pobierania pokemonów", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {currentPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;

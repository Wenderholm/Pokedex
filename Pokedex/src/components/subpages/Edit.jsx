import { useState } from "react";
import { usePokemons } from "../../context/pokemons-context";
import Pagination from "../shared/Pagination";
import {
  Container,
  Title,
  Subtitle,
  CreateButtonContainer,
  CreateButton,
  PokemonGrid,
  PokemonCard,
  PokemonNumber,
  PokemonImage,
  PokemonInfo,
  PokemonName,
  PokemonStats,
  EditButton,
  EmptyMessage,
} from "./Edit.styled";

const POKEMONS_PER_PAGE = 10;

const Edit = () => {
  const { pokemons, loading } = usePokemons();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(pokemons.length / POKEMONS_PER_PAGE),
  );
  const startIndex = (currentPage - 1) * POKEMONS_PER_PAGE;
  const currentPokemons = pokemons.slice(
    startIndex,
    startIndex + POKEMONS_PER_PAGE,
  );

  if (loading) return <div>Ładowanie pokemonów...</div>;

  return (
    <Container>
      <Title>Edycja Pokemonów</Title>

      <CreateButtonContainer>
        <CreateButton to="/edit/create">Stwórz pokemona</CreateButton>
      </CreateButtonContainer>

      <Subtitle>Lista dostępnych pokemonów</Subtitle>

      <PokemonGrid>
        {currentPokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.id}>
            <PokemonNumber>#{startIndex + index + 1}</PokemonNumber>

            <PokemonImage
              // src={
              //   pokemon.image ||
              //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              //     pokemon.imageId || pokemon.pokemonId
              //   }.png`
              // }
              src={pokemon.image}
              alt={pokemon.name}
            />

            <PokemonInfo>
              <PokemonName>{pokemon.name}</PokemonName>
              <PokemonStats>
                Waga: {pokemon.weight} | Wzrost: {pokemon.height} | Exp:{" "}
                {pokemon.baseExperience}
              </PokemonStats>
            </PokemonInfo>

            <EditButton to={`/edit/${pokemon.id}`}>Edytuj</EditButton>
          </PokemonCard>
        ))}
      </PokemonGrid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {pokemons.length === 0 && (
        <EmptyMessage>
          Brak pokemonów do edytowania. Stwórz pierwszego pokemona!
        </EmptyMessage>
      )}
    </Container>
  );
};

export default Edit;

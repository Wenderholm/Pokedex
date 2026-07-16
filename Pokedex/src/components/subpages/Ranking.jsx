import { useMemo, useState } from "react";
import LoadingMessage from "../shared/LoadingMessage";
import { usePokemons } from "../../context/pokemons-context";
import Pagination from "../shared/Pagination";
import {
  Container,
  Title,
  SortContainer,
  SortLabel,
  SortSelect,
  PokemonList,
  PokemonCard,
  RankNumber,
  PokemonImage,
  PokemonInfo,
  PokemonName,
  StatBadge,
  WinBadge,
  LoseBadge,
  StatsContainer,
} from "./Ranking.styled";

const SORT_OPTIONS = {
  experience: "baseExperience",
  weight: "weight",
  height: "height",
  wins: "wins",
};

const POKEMONS_PER_PAGE = 10;

const Ranking = () => {
  const { pokemons, loading } = usePokemons();
  const [sortBy, setSortBy] = useState("experience");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedPokemons = useMemo(() => {
    return [...pokemons].sort((a, b) => {
      return b[SORT_OPTIONS[sortBy]] - a[SORT_OPTIONS[sortBy]];
    });
  }, [pokemons, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedPokemons.length / POKEMONS_PER_PAGE),
  );
  const startIndex = (currentPage - 1) * POKEMONS_PER_PAGE;
  const currentPokemons = sortedPokemons.slice(
    startIndex,
    startIndex + POKEMONS_PER_PAGE,
  );

  if (loading) return <LoadingMessage>Ładowanie rankingu...</LoadingMessage>;

  return (
    <Container>
      <Title>🏆 Ranking Pokémonów</Title>

      <SortContainer>
        <SortLabel>Sortuj według:</SortLabel>
        <SortSelect
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="experience">Experience</option>
          <option value="weight">Weight</option>
          <option value="height">Height</option>
          <option value="wins">Wins</option>
        </SortSelect>
      </SortContainer>

      <PokemonList>
        {currentPokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.id}>
            <RankNumber>{startIndex + index + 1}.</RankNumber>

            <PokemonImage
              src={
                pokemon.image ||
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.imageId || pokemon.pokemonId
                }.png`
              }
              alt={pokemon.name}
            />

            <PokemonInfo>
              <PokemonName>{pokemon.name}</PokemonName>
              <StatsContainer>
                <StatBadge>EXP: {pokemon.baseExperience}</StatBadge>
                <StatBadge>Weight: {pokemon.weight}</StatBadge>
                <StatBadge>Height: {pokemon.height}</StatBadge>
                <WinBadge>W: {pokemon.wins}</WinBadge>
                <LoseBadge>L: {pokemon.loses}</LoseBadge>
              </StatsContainer>
            </PokemonInfo>
          </PokemonCard>
        ))}
      </PokemonList>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default Ranking;

import { useEffect, useState, useMemo } from "react";
import { getAllBattlePokemons } from "../../services/pokemonsApi";
import LoadingMessage from "../shared/LoadingMessage";
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
} from "./Ranking.styled";

const SORT_OPTIONS = {
  experience: "baseExperience",
  weight: "weight",
  height: "height",
  wins: "wins",
};

const Ranking = () => {
  const [pokemons, setPokemons] = useState([]);
  const [sortBy, setSortBy] = useState("experience");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        // pobiera wszystkie pokiemony z walk
        const res = await getAllBattlePokemons();
        setPokemons(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, []);

  // memoizacja wyniku sortowania, żeby nie sortować przy każdym renderze
  const sortedPokemons = useMemo(() => {
    return [...pokemons].sort((a, b) => {
      return b[SORT_OPTIONS[sortBy]] - a[SORT_OPTIONS[sortBy]];
    });
  }, [pokemons, sortBy]);

  if (loading) return <LoadingMessage>Ładowanie rankingu...</LoadingMessage>;

  return (
    <Container>
      <Title>🏆 Ranking Pokémonów</Title>

      <SortContainer>
        <SortLabel>Sortuj według:</SortLabel>
        <SortSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="experience">Experience</option>
          <option value="weight">Weight</option>
          <option value="height">Height</option>
          <option value="wins">Wins</option>
        </SortSelect>
      </SortContainer>

      <PokemonList>
        {sortedPokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.id}>
            <RankNumber>{index + 1}.</RankNumber>

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
              <StatBadge>EXP: {pokemon.baseExperience}</StatBadge>
              <StatBadge>Weigh: {pokemon.weight}</StatBadge>
              <StatBadge>Heigh: {pokemon.height}</StatBadge>
              <WinBadge>W: {pokemon.wins}</WinBadge>
              <LoseBadge>L: {pokemon.loses}</LoseBadge>
            </PokemonInfo>
          </PokemonCard>
        ))}
      </PokemonList>
    </Container>
  );
};

export default Ranking;

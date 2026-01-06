import { useNavigate } from "react-router-dom";

import {
  Card,
  Image,
  Name,
  StatsGrid,
  Stat,
  StatValue,
  StatLabel,
  ScoreCard,
} from "./PokemonCard.styled";

const PokemonCard = ({ pokemon, battleResult }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
      pokemon={pokemon}
      battleResult={battleResult}
      // onMouseEnter={(e) => {
      //   e.currentTarget.style.borderColor = "red";
      //   e.currentTarget.style.transform = "scale(1.05)";
      // }}
      // onMouseLeave={(e) => {
      //   e.currentTarget.style.borderColor = "#ccc";
      //   e.currentTarget.style.transform = "scale(1)";
      // }}
    >
      {(pokemon.wins > 0 || pokemon.loses > 0) && (
        <ScoreCard>
          {pokemon.wins ? <p>W: {pokemon.wins}</p> : <p>W: 0</p>}
          {pokemon.loses ? <p>L: {pokemon.loses}</p> : <p>L: 0</p>}
        </ScoreCard>
      )}
      <Image src={pokemon.image} alt={pokemon.name} />

      <Name>{pokemon.name}</Name>

      <StatsGrid>
        <Stat>
          <StatValue>{pokemon.height}</StatValue>
          <StatLabel>Height</StatLabel>
        </Stat>

        <Stat>
          <StatValue>{pokemon.baseExperience}</StatValue>
          <StatLabel>Base experience</StatLabel>
        </Stat>

        <Stat>
          <StatValue>{pokemon.weight}</StatValue>
          <StatLabel>Weight</StatLabel>
        </Stat>

        <Stat>
          <StatValue>{pokemon.ability || "-"}</StatValue>
          <StatLabel>Ability</StatLabel>
        </Stat>
      </StatsGrid>
    </Card>
  );
};

export default PokemonCard;

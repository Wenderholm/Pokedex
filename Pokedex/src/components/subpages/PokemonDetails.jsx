import { useParams } from "react-router-dom";
import { useFavourites } from "../../context/FavouritesContext";
import { useArena } from "../../context/ArenaContext";
import { usePokemons } from "../../context/PokemonsContext";
import PokemonCard from "../shared/PokemonCard.jsx";
import {
  PokemonDetailsContainer,
  PokemonCardWrapper,
  PokemonCardButtonWrapper,
  ImageSection,
  ExpSection,
  PokemonImg,
  StatRowOne,
  StatRowTwo,
  Stat,
  StatLabel,
  StatValue,
  ExpSectionPokemonName,
} from "../subpages/PokemonDetails.styled.js";

const PokemonDetails = () => {
  const { id } = useParams();
  const { getPokemonById, loading } = usePokemons();
  const pokemon = getPokemonById(id);

  const { toggleFavourite, isFavourite } = useFavourites();
  const { addToArena, isInArena, arena } = useArena();

  if (loading) return <p>Ładowanie...</p>;
  if (!pokemon) return null;

  return (
    <>
      {/* <PokemonCard pokemon={pokemon} /> */}
      <PokemonDetailsContainer>
        <PokemonCardWrapper>
          <ImageSection>
            <PokemonImg src={pokemon.image} alt={pokemon.name} />
          </ImageSection>
          <ExpSection>
            <ExpSectionPokemonName>{pokemon.name}</ExpSectionPokemonName>
            <StatRowOne>
              <Stat>
                <StatValue>{pokemon.height}</StatValue>
                <StatLabel>Height</StatLabel>
              </Stat>
              <Stat>
                <StatValue>{pokemon.weight}</StatValue>
                <StatLabel>Weight</StatLabel>
              </Stat>
            </StatRowOne>
            <StatRowTwo>
              <Stat>
                <StatValue>{pokemon.baseExperience}</StatValue>
                <StatLabel>Base Exp</StatLabel>
              </Stat>
              <Stat>
                <StatValue>{pokemon.ability || "Unknown"}</StatValue>
                <StatLabel>Ability</StatLabel>
              </Stat>
            </StatRowTwo>

            <PokemonCardButtonWrapper>
              <button onClick={() => toggleFavourite(pokemon)}>
                {isFavourite(pokemon.id)
                  ? "❤️ Usuń z ulubionych"
                  : "🤍 Dodaj do ulubionych"}
              </button>

              <button
                onClick={() => addToArena(pokemon)}
                disabled={isInArena(pokemon.id) || arena.length >= 2}
              >
                {isInArena(pokemon.id)
                  ? "⚔️ Na arenie ⚔️"
                  : `⚔️ Dodaj do areny (${arena.length}/2)`}
              </button>
            </PokemonCardButtonWrapper>
          </ExpSection>
        </PokemonCardWrapper>
      </PokemonDetailsContainer>
    </>
  );
};

export default PokemonDetails;

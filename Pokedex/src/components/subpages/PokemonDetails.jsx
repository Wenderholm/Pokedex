import { useParams } from "react-router-dom";
import { useFavourites } from "../../context/favourites-context";
import { useArena } from "../../context/arena-context";
import { usePokemons } from "../../context/pokemons-context";
import { useAuth } from "../../context/auth-context";
import PokemonCard from "../shared/PokemonCard.jsx";
import LoadingMessage from "../shared/LoadingMessage";
import {
  PokemonDetailsContainer,
  PokemonCardWrapper,
  PokemonCardButtonWrapper,
  HeartButton,
  SwordButton,
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
  const { user } = useAuth();

  const { toggleFavourite, isFavourite } = useFavourites();
  const { addToArena, isInArena, arena } = useArena();

  if (loading) return <LoadingMessage />;
  if (!pokemon) return null;

  return (
    <>
      <PokemonDetailsContainer>
        <PokemonCardWrapper>
          <div>
            <PokemonImg src={pokemon.image} alt={pokemon.name} />
          </div>
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
              {user && (
                <>
                  <HeartButton
                    $active={isFavourite(pokemon.id)}
                    onClick={() => toggleFavourite(pokemon)}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {isFavourite(pokemon.id)
                      ? "Usuń z ulubionych"
                      : "Dodaj do ulubionych"}
                  </HeartButton>

                  <SwordButton
                    $active={isInArena(pokemon.id)}
                    onClick={() => addToArena(pokemon)}
                    disabled={isInArena(pokemon.id) || arena.length >= 2}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-3.12 3.12-1.41-1.42-1.42 1.42 1.41 1.41-6.6 6.6A2 2 0 0 0 5 16v3h3a2 2 0 0 0 1.42-.59l6.6-6.6 1.41 1.42 1.42-1.42-1.42-1.41 3.12-3.12a1 1 0 0 0 .16-1.65z" />
                    </svg>
                    {isInArena(pokemon.id) ? "Na arenie" : "Dodaj do areny"}
                    <span>({arena.length}/2)</span>
                  </SwordButton>
                </>
              )}
            </PokemonCardButtonWrapper>
          </ExpSection>
        </PokemonCardWrapper>
      </PokemonDetailsContainer>
    </>
  );
};

export default PokemonDetails;

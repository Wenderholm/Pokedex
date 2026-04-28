import { useParams } from "react-router-dom";
import { useFavourites } from "../../context/favourites-context";
import { useArena } from "../../context/arena-context";
import { usePokemons } from "../../context/pokemons-context";
import { useAuth } from "../../context/auth-context";
import redHeart from "../../icons/redHeart.jpg";
import greyHeart from "../../icons/greyHeart.jpg";
import sword from "../../icons/sword.jpg";
import PokemonCard from "../shared/PokemonCard.jsx";
import LoadingMessage from "../shared/LoadingMessage";
import {
  PokemonDetailsContainer,
  PokemonCardWrapper,
  ScoreCard,
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
          {user && (pokemon.wins > 0 || pokemon.loses > 0) && (
            <ScoreCard>
              {pokemon.wins ? <p>W: {pokemon.wins}</p> : <p>W: 0</p>}
              {pokemon.loses ? <p>L: {pokemon.loses}</p> : <p>L: 0</p>}
            </ScoreCard>
          )}
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
                    <img
                      src={isFavourite(pokemon.id) ? redHeart : greyHeart}
                      alt={isFavourite(pokemon.id) ? "Red heart" : "Grey heart"}
                    />
                    {isFavourite(pokemon.id)
                      ? "Usuń z ulubionych"
                      : "Dodaj do ulubionych"}
                  </HeartButton>

                  <SwordButton
                    $active={isInArena(pokemon.id)}
                    onClick={() => addToArena(pokemon)}
                    disabled={isInArena(pokemon.id) || arena.length >= 2}
                  >
                    <img src={sword} alt="Sword icon" />
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

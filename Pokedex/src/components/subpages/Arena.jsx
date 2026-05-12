import { useArena } from "../../context/arena-context";
import { usePokemons } from "../../context/pokemons-context";
import { upsertPokemonByPokemonId } from "../../services/pokemonsApi";
import PokemonCard from "../shared/PokemonCard";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import pokemonLogo from "../../icons/pokemonLogo.png";
import {
  ArenaContainer,
  ArenaFightArea,
  PokemonContainer,
  PokemonTitle,
  RemoveButton,
  FightButtonContainer,
  FightButton,
  ButtonsContainer,
  NewBattleButton,
  ExitArenaButton,
  PlaceholderContainer,
} from "./Arena.styled";
import { BattleResultModal } from "./BattleResultModal";

const Arena = () => {
  const { arena, removeFromArena, resetArena, updateArenaPokemons } =
    useArena();
  const { refreshPokemons } = usePokemons();
  const { enqueueSnackbar } = useSnackbar();
  const [battleResult, setBattleResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fight = async () => {
    const [p1, p2] = arena;

    const score1 = p1.baseExperience * p1.weight;
    const score2 = p2.baseExperience * p2.weight;

    if (score1 === score2) {
      enqueueSnackbar("Remis! Żaden pokémon nie otrzymuje punktów.", {
        variant: "info",
      });
      return;
    }

    const winner = score1 > score2 ? p1 : p2;
    const loser = score1 > score2 ? p2 : p1;

    setBattleResult({ winner, loser });

    await saveBattleResult(winner, true);
    await saveBattleResult(loser, false);
    await refreshPokemons();

    const updatedWinner = {
      ...winner,
      wins: (winner.wins || 0) + 1,
      baseExperience: winner.baseExperience + 10,
    };
    const updatedLoser = { ...loser, loses: (loser.loses || 0) + 1 };
    updateArenaPokemons([updatedWinner, updatedLoser]);

    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const saveBattleResult = async (pokemon, isWinner) => {
    await upsertPokemonByPokemonId(pokemon.id, {
      name: pokemon.name,
      image: pokemon.image,
      weight: pokemon.weight,
      height: pokemon.height,
      ability: pokemon.ability,
      baseExperience: pokemon.baseExperience + (isWinner ? 10 : 0),
      wins: (pokemon.wins || 0) + (isWinner ? 1 : 0),
      loses: (pokemon.loses || 0) + (isWinner ? 0 : 1),
      isFavorite: pokemon.isFavorite || false,
    });
  };

  const resetBattle = () => {
    setBattleResult(null);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ArenaContainer>
      <h1>Arena</h1>
      <h2>
        {arena.length < 2 ? (
          <p>Dodaj Pokémony do areny</p>
        ) : (
          <p>POKEMONY GOTOWE DO WALKI</p>
        )}
      </h2>
      <ArenaFightArea>
        {arena[0] ? (
          <PokemonContainer
            $battleResult={battleResult}
            $pokemonId={arena[0].id}
          >
            <PokemonTitle>Pierwszy Pokemon</PokemonTitle>
            <PokemonCard pokemon={arena[0]} battleResult={battleResult} />
            <RemoveButton onClick={() => removeFromArena(arena[0].id)}>
              X
            </RemoveButton>
          </PokemonContainer>
        ) : (
          <PlaceholderContainer>
            <img src={pokemonLogo} alt="placeholder" />
            <p>Dodaj pierwszego Pokémona</p>
          </PlaceholderContainer>
        )}

        <FightButtonContainer>
          <FightButton
            disabled={arena.length !== 2 || battleResult !== null}
            onClick={fight}
            $battleResult={battleResult}
          >
            ⚔️ WALCZ! ⚔️
          </FightButton>
        </FightButtonContainer>

        {arena[1] ? (
          <PokemonContainer
            $battleResult={battleResult}
            $pokemonId={arena[1].id}
          >
            <PokemonTitle>Drugi Pokemon</PokemonTitle>
            <PokemonCard pokemon={arena[1]} battleResult={battleResult} />{" "}
            <RemoveButton onClick={() => removeFromArena(arena[1].id)}>
              X
            </RemoveButton>
          </PokemonContainer>
        ) : (
          <PlaceholderContainer>
            <img src={pokemonLogo} alt="placeholder" />
            <p>Dodaj drugiego Pokémona</p>
          </PlaceholderContainer>
        )}
      </ArenaFightArea>
      <ButtonsContainer>
        {battleResult && (
          <NewBattleButton onClick={resetBattle}>🔄 Nowa walka</NewBattleButton>
        )}
        <ExitArenaButton
          onClick={() => {
            resetArena();
            resetBattle();
            navigate("/");
          }}
        >
          🚪 Opuść arenę
        </ExitArenaButton>
      </ButtonsContainer>

      {showModal && (
        <BattleResultModal battleResult={battleResult} onClose={closeModal} />
      )}
    </ArenaContainer>
  );
};

export default Arena;

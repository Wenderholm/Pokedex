import { useArena } from "../../context/ArenaContext";
import { usePokemons } from "../../context/PokemonsContext";
import {
  findPokemonByPokeApiId,
  createPokemon,
  updatePokemon,
} from "../../services/pokemonsApi";
import PokemonCard from "../shared/PokemonCard";
import { useState } from "react";
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
} from "./Arena.styled";
import { BattleResultModal } from "./BattleResultModal";

const Arena = () => {
  const { arena, removeFromArena, resetArena, updateArenaPokemons } =
    useArena();
  const { refreshPokemons } = usePokemons();
  const [battleResult, setBattleResult] = useState(null); // { winner: pokemon, loser: pokemon }
  const [showModal, setShowModal] = useState(false);

  const fight = async () => {
    const [p1, p2] = arena;

    const score1 = p1.baseExperience * p1.weight;
    const score2 = p2.baseExperience * p2.weight;

    if (score1 === score2) {
      alert("Remis!");
      return;
    }

    const winner = score1 > score2 ? p1 : p2;
    const loser = score1 > score2 ? p2 : p1;

    // Ustawiamy wyniki walki
    setBattleResult({ winner, loser });

    await saveBattleResult(winner, true);
    await saveBattleResult(loser, false);
    await refreshPokemons();

    // Aktualizujemy Pokémony w arenie z nowymi statystykami
    const updatedWinner = {
      ...winner,
      wins: (winner.wins || 0) + 1,
      baseExperience: winner.baseExperience + 10,
    };
    const updatedLoser = { ...loser, loses: (loser.loses || 0) + 1 };
    updateArenaPokemons([updatedWinner, updatedLoser]);

    // Pokazujemy modal z wynikiem
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  const saveBattleResult = async (pokemon, isWinner) => {
    // sprawdzamy czy istnieje w JSON-server
    const res = await findPokemonByPokeApiId(pokemon.id);
    const existing = res.data[0];

    if (!existing) {
      // CREATE
      await createPokemon({
        pokemonId: pokemon.id,
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        baseExperience: pokemon.baseExperience + (isWinner ? 10 : 0),
        wins: isWinner ? 1 : 0,
        loses: isWinner ? 0 : 1,
      });
    } else {
      // UPDATE
      await updatePokemon(existing.id, {
        ...existing,
        baseExperience: existing.baseExperience + (isWinner ? 10 : 0),
        wins: existing.wins + (isWinner ? 1 : 0),
        loses: existing.loses + (isWinner ? 0 : 1),
      });
    }
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
        {arena[0] && (
          <PokemonContainer battleResult={battleResult} pokemonId={arena[0].id}>
            <PokemonTitle>Pierwszy Pokemon</PokemonTitle>
            <PokemonCard pokemon={arena[0]} battleResult={battleResult} />
            <RemoveButton onClick={() => removeFromArena(arena[0]?.id)}>
              X
            </RemoveButton>
          </PokemonContainer>
        )}

        {arena.length === 2 && (
          <FightButtonContainer>
            <FightButton
              disabled={arena.length !== 2 || battleResult !== null}
              onClick={fight}
              battleResult={battleResult}
            >
              ⚔️ WALCZ! ⚔️
            </FightButton>
          </FightButtonContainer>
        )}

        {arena[1] && (
          <PokemonContainer battleResult={battleResult} pokemonId={arena[1].id}>
            <PokemonTitle>Drugi Pokemon</PokemonTitle>
            <PokemonCard pokemon={arena[1]} battleResult={battleResult} />{" "}
            <RemoveButton onClick={() => removeFromArena(arena[1]?.id)}>
              X
            </RemoveButton>
          </PokemonContainer>
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

import { useArena } from "../../context/ArenaContext";
import { usePokemons } from "../../context/PokemonsContext";
import {
  findPokemonByPokeApiId,
  createPokemon,
  updatePokemon,
} from "../../services/pokemonsApi";
import PokemonCard from "../shared/PokemonCard";
import { useState } from "react";

const Arena = () => {
  const { arena, removeFromArena, resetArena, updateArenaPokemons } =
    useArena();
  const { refreshPokemons } = usePokemons();
  const [battleResult, setBattleResult] = useState(null); // { winner: pokemon, loser: pokemon }

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

    // Pokazujemy wynik po krótkiej pauzie
    setTimeout(() => {
      alert(`🏆 Wygrywa ${winner.name}`);
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
  };

  return (
    <div>
      <h1>Arena</h1>
      <h2>
        {arena.length < 2 ? (
          <p>Dodaj Pokémony do areny</p>
        ) : (
          <p>POKEMONY GOTOWE DO WALKI </p>
        )}
      </h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {arena[0] && (
          <div
            style={{
              opacity:
                battleResult && battleResult.loser.id === arena[0].id ? 0.3 : 1,
              transition: "opacity 0.5s ease",
              border:
                battleResult && battleResult.winner.id === arena[0].id
                  ? "3px solid gold"
                  : "none",
              borderRadius:
                battleResult && battleResult.winner.id === arena[0].id
                  ? "20px"
                  : "0",
              boxShadow:
                battleResult && battleResult.winner.id === arena[0].id
                  ? "0 0 20px gold"
                  : "none",
            }}
          >
            <h3>Pierwszy Pokemon</h3>
            <PokemonCard pokemon={arena[0]} />
            <button
              onClick={() => removeFromArena(arena[0]?.id)}
              style={{ marginTop: "10px" }}
            >
              Usuń z areny
            </button>
          </div>
        )}

        {arena.length === 2 && (
          <div style={{ alignSelf: "center" }}>
            <button
              disabled={arena.length !== 2}
              onClick={fight}
              style={{
                padding: "15px 30px",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#ff4444",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              ⚔️ WALCZ! ⚔️
            </button>
          </div>
        )}

        {arena[1] && (
          <div
            style={{
              opacity:
                battleResult && battleResult.loser.id === arena[1].id ? 0.3 : 1,
              transition: "opacity 0.5s ease",
              border:
                battleResult && battleResult.winner.id === arena[1].id
                  ? "3px solid gold"
                  : "none",
              borderRadius:
                battleResult && battleResult.winner.id === arena[1].id
                  ? "20px"
                  : "0",
              boxShadow:
                battleResult && battleResult.winner.id === arena[1].id
                  ? "0 0 20px gold"
                  : "none",
            }}
          >
            <h3>Drugi Pokemon</h3>
            <PokemonCard pokemon={arena[1]} />
            <button
              onClick={() => removeFromArena(arena[1]?.id)}
              style={{ marginTop: "10px" }}
            >
              Usuń z areny
            </button>
          </div>
        )}
      </div>
      <div style={{ marginTop: "30px" }}>
        {battleResult && (
          <button
            onClick={resetBattle}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            🔄 Nowa walka
          </button>
        )}
        <button
          onClick={() => {
            resetArena();
            resetBattle();
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#666",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🚪 Opuść arenę
        </button>
      </div>
    </div>
  );
};

export default Arena;

import { useArena } from "../../context/ArenaContext";
import {
  getPokemonByPokemonId,
  createPokemon,
  updatePokemon,
} from "../../services/pokemonsApi";

const Arena = () => {
  const { arena, removeFromArena, resetArena } = useArena();

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

    await saveBattleResult(winner, true);
    await saveBattleResult(loser, false);

    alert(`🏆 Wygrywa ${winner.name}`);
  };

  const saveBattleResult = async (pokemon, isWinner) => {
    // 🔍 sprawdzamy czy istnieje w JSON-server
    const res = await getPokemonByPokemonId(pokemon.id);
    const existing = res.data[0];

    if (!existing) {
      // ➕ CREATE
      await createPokemon({
        pokemonId: pokemon.id,
        name: pokemon.name,
        weight: pokemon.weight,
        baseExperience: pokemon.baseExperience + (isWinner ? 10 : 0),
        wins: isWinner ? 1 : 0,
        loses: isWinner ? 0 : 1,
      });
    } else {
      // ✏️ UPDATE
      await updatePokemon(existing.id, {
        ...existing,
        baseExperience: existing.baseExperience + (isWinner ? 10 : 0),
        wins: existing.wins + (isWinner ? 1 : 0),
        loses: existing.loses + (isWinner ? 0 : 1),
      });
    }
  };

  return (
    <div>
      <h1>Arena</h1>

      <div style={{ display: "flex", gap: 20 }}>
        {arena.map((p) => (
          <div key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <button onClick={() => removeFromArena(p.id)}>Usuń</button>
          </div>
        ))}

        {arena.length < 2 && <p>Dodaj Pokémony do areny</p>}
      </div>

      <button disabled={arena.length !== 2} onClick={fight}>
        WALCZ!
      </button>

      <button onClick={resetArena}>Opuść arenę</button>
    </div>
  );
};

export default Arena;

import { useState } from "react";
import { ArenaContext } from "./arena-context";

export const ArenaProvider = ({ children }) => {
  const [arena, setArena] = useState([]);

  const addToArena = (pokemon) => {
    if (arena.length >= 2) return;
    if (arena.find((p) => p.id === pokemon.id)) return;

    setArena((prev) => [...prev, pokemon]);
  };

  const removeFromArena = (id) => {
    setArena((prev) => prev.filter((p) => p.id !== id));
  };

  const resetArena = () => {
    setArena([]);
  };

  const updateArenaPokemons = (updatedPokemons) => {
    setArena((prevArena) =>
      prevArena.map((arenaPokemon) => {
        const updated = updatedPokemons.find((p) => p.id === arenaPokemon.id);
        return updated || arenaPokemon;
      }),
    );
  };

  const isInArena = (id) => arena.some((p) => p.id === id);

  return (
    <ArenaContext.Provider
      value={{
        arena,
        addToArena,
        removeFromArena,
        resetArena,
        updateArenaPokemons,
        isInArena,
      }}
    >
      {children}
    </ArenaContext.Provider>
  );
};

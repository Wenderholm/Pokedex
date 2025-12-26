import { createContext, useContext, useState } from "react";

const ArenaContext = createContext();

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

  const isInArena = (id) => arena.some((p) => p.id === id);

  return (
    <ArenaContext.Provider
      value={{ arena, addToArena, removeFromArena, isInArena }}
    >
      {children}
    </ArenaContext.Provider>
  );
};

export const useArena = () => useContext(ArenaContext);

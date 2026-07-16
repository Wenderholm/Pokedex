import { createContext, useContext } from "react";

export const ArenaContext = createContext();

export const useArena = () => useContext(ArenaContext);

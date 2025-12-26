import { createContext, useContext, useEffect, useState } from "react";
import {
  getFavourites,
  addFavourite,
  removeFavourite,
} from "../services/favouritesApi";

const FavouritesContext = createContext(null);

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 POBRANIE PRZY STARCIE
  useEffect(() => {
    const fetchFavourites = async () => {
      const res = await getFavourites();
      setFavourites(res.data);
      setLoading(false);
    };

    fetchFavourites();
  }, []);

  // 🔹 DODAJ / USUŃ
  const toggleFavourite = async (pokemon) => {
    // sprawdzamy PO pokemonId
    const existing = favourites.find((fav) => fav.pokemonId === pokemon.id);

    if (existing) {
      // ❌ USUŃ
      await removeFavourite(existing.id); // JSON-server ID
      setFavourites((prev) => prev.filter((fav) => fav.id !== existing.id));
    } else {
      // ➕ DODAJ
      const res = await addFavourite({
        pokemonId: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        height: pokemon.height,
        weight: pokemon.weight,
        baseExperience: pokemon.baseExperience,
      });

      setFavourites((prev) => [...prev, res.data]);
    }
  };

  // 🔹 SPRAWDZENIE SERCA
  const isFavourite = (pokemonId) => {
    return favourites.some((fav) => fav.pokemonId === pokemonId);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        loading,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);

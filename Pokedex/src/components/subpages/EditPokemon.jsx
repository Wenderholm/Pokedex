import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getBattlePokemonById,
  updatePokemon,
} from "../../services/pokemonsApi";
import PokemonForm from "../forms/PokemonForm";
import { useSnackbar } from "notistack";
import { usePokemons } from "../../context/PokemonsContext";
import {
  Container,
  Title,
  LoadingMessage,
  PokemonPreviewCard,
  PokemonImage,
  PokemonInfo,
  PokemonName,
  PokemonStats,
} from "./EditPokemon.styled";

const EditPokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { refreshPokemons } = usePokemons();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await getBattlePokemonById(id);
        setPokemon(response.data);
      } catch (error) {
        console.error("Błąd pobierania pokemona:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await updatePokemon(id, data);

      enqueueSnackbar(`Zmieniono atrybuty ${pokemon.name}`, {
        variant: "success",
      });

      // 🔥 Odświeżamy listę pokemonów po edycji
      await refreshPokemons();

      navigate("/edit");
    } catch {
      enqueueSnackbar("Błąd podczas aktualizacji", { variant: "error" });
    }
  };

  if (!pokemon) return <LoadingMessage>Ładowanie...</LoadingMessage>;

  return (
    <Container>
      <Title>Formularz edycji pokemona: {pokemon.name}</Title>

      <PokemonPreviewCard>
        <PokemonImage
          src={
            pokemon.image ||
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.imageId || pokemon.pokemonId
            }.png`
          }
          alt={pokemon.name}
        />
        <PokemonInfo>
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonStats>
            Zwycięstwa: {pokemon.wins || 0} | Przegrane: {pokemon.loses || 0}
          </PokemonStats>
        </PokemonInfo>
      </PokemonPreviewCard>

      <PokemonForm defaultValues={pokemon} onSubmit={onSubmit} isEdit={true} />
    </Container>
  );
};

export default EditPokemon;

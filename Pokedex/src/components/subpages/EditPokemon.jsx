import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getBattlePokemonById,
  updatePokemon,
} from "../../services/pokemonsApi";
// import PokemonForm from "../../components/PokemonForm";
import PokemonForm from "../../components/forms/PokemonForm";
import { useSnackbar } from "notistack";

const EditPokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getBattlePokemonById(id).then((response) => setPokemon(response.data));
  }, [id]);

  const onSubmit = async (data) => {
    await updatePokemon(id, data);

    enqueueSnackbar(`Zmieniono atrybuty ${pokemon.name}`, {
      variant: "success",
    });

    navigate("/");
  };

  if (!pokemon) return null;

  return <PokemonForm defaultValues={pokemon} onSubmit={onSubmit} isEdit />;
};

export default EditPokemon;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonById, updatePokemon } from "../../services/pokemonsApi";
import PokemonForm from "../../components/PokemonForm";
import { useSnackbar } from "notistack";

const EditPokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemonById(id).then(setPokemon);
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

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  upsertPokemonByPokemonId,
} from "../../services/pokemonsApi";
import { useSnackbar } from "notistack";
import { usePokemons } from "../../context/pokemons-context";
import {
  Form,
  FormField,
  Label,
  NumberInput,
  SubmitButton,
} from "../../components/forms/PokemonForm.styled";

const EditPokemon = () => {
  const { id } = useParams();
  const pokemonId = Number(id);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { getPokemonById, refreshPokemons } = usePokemons();
  const [pokemon, setPokemon] = useState(null);
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    baseExperience: "",
  });
  const loadedIdRef = useRef(null);

  useEffect(() => {
    if (loadedIdRef.current === id) {
      return;
    }

    loadedIdRef.current = id;

    const fetchPokemon = async () => {
      try {
        const selectedPokemon = getPokemonById(id);
        if (!selectedPokemon) {
          enqueueSnackbar("Nie znaleziono pokemona do edycji", {
            variant: "error",
          });
          navigate("/edit");
          return;
        }

        setPokemon(selectedPokemon);
        setFormData({
          weight: String(selectedPokemon.weight ?? ""),
          height: String(selectedPokemon.height ?? ""),
          baseExperience: String(selectedPokemon.baseExperience ?? ""),
        });
      } catch (error) {
        console.error("Blad pobierania pokemona:", error);
        enqueueSnackbar("Nie udalo sie pobrac pokemona do edycji", {
          variant: "error",
        });
        navigate("/edit");
      }
    };

    fetchPokemon();
  }, [enqueueSnackbar, getPokemonById, id, navigate]);

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!pokemon) {
      enqueueSnackbar("Pokemon do edycji nie jest zaladowany", {
        variant: "error",
      });
      return;
    }

    const updatedData = {
      weight: Number(formData.weight),
      height: Number(formData.height),
      baseExperience: Number(formData.baseExperience),
    };

    if (
      Number.isNaN(updatedData.weight) ||
      Number.isNaN(updatedData.height) ||
      Number.isNaN(updatedData.baseExperience)
    ) {
      enqueueSnackbar("Podaj poprawne wartosci liczbowe", {
        variant: "error",
      });
      return;
    }

    try {
      await upsertPokemonByPokemonId(pokemonId, {
        name: pokemon.name,
        image: pokemon.image,
        ability: pokemon.ability,
        wins: pokemon.wins || 0,
        loses: pokemon.loses || 0,
        isFavorite: pokemon.isFavorite || false,
        ...updatedData,
      });

      await refreshPokemons();

      const refreshedPokemon = getPokemonById(id);
      if (refreshedPokemon) {
        setPokemon(refreshedPokemon);
      }

      enqueueSnackbar(
        `Zmieniono ${pokemon.name}. Nowa waga: ${updatedData.weight}`,
        {
          variant: "success",
        },
      );

      navigate("/edit");
    } catch (error) {
      console.error("Blad zapisu pokemona:", error);
      enqueueSnackbar("Nie udalo sie zapisac zmian", {
        variant: "error",
      });
    }
  };

  if (!pokemon) return <p>Ladowanie pokemona...</p>;

  return (
    <Form onSubmit={onSubmit}>
      <FormField>
        <Label>Nowa waga (kg):</Label>
        <NumberInput
          name="weight"
          value={formData.weight}
          onChange={onChangeField}
          required
        />
      </FormField>

      <FormField>
        <Label>Nowy wzrost (dm):</Label>
        <NumberInput
          name="height"
          value={formData.height}
          onChange={onChangeField}
          required
        />
      </FormField>

      <FormField>
        <Label>Nowe doświadczenie:</Label>
        <NumberInput
          name="baseExperience"
          value={formData.baseExperience}
          onChange={onChangeField}
          required
        />
      </FormField>

      <SubmitButton type="submit" $isEdit>
        Zmień atrybuty
      </SubmitButton>
    </Form>
  );
};

export default EditPokemon;

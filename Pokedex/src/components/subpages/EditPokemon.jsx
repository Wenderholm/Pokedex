import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  getBattlePokemonById,
  updatePokemon,
} from "../../services/pokemonsApi";
import { useSnackbar } from "notistack";
import { usePokemons } from "../../context/PokemonsContext";
import {
  Form,
  FormField,
  Label,
  NumberInput,
  SubmitButton,
} from "../../components/forms/PokemonForm.styled";

const EditPokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { refreshPokemons } = usePokemons();
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
        const response = await getBattlePokemonById(id);
        setPokemon(response.data);
        setFormData({
          weight: String(response.data.weight ?? ""),
          height: String(response.data.height ?? ""),
          baseExperience: String(response.data.baseExperience ?? ""),
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
  }, [enqueueSnackbar, id, navigate]);

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
      await updatePokemon(id, updatedData);

      const verifyResponse = await getBattlePokemonById(id);
      const verifiedPokemon = verifyResponse.data;

      const weightSaved = verifiedPokemon.weight === updatedData.weight;
      const heightSaved = verifiedPokemon.height === updatedData.height;
      const baseExperienceSaved =
        verifiedPokemon.baseExperience === updatedData.baseExperience;

      if (!weightSaved || !heightSaved || !baseExperienceSaved) {
        enqueueSnackbar(
          `Zapis niezgodny. Wyslano wage: ${updatedData.weight}, zapisano: ${verifiedPokemon.weight}`,
          {
            variant: "error",
          },
        );
        return;
      }

      setPokemon(verifiedPokemon);
      await refreshPokemons();

      enqueueSnackbar(
        `Zmieniono ${verifiedPokemon.name}. Nowa waga: ${verifiedPokemon.weight}`,
        {
          variant: "success",
        },
      );

      navigate(`/edit?updatedAt=${Date.now()}`, {
        state: { updatedAt: Date.now() },
      });
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

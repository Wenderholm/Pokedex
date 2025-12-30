import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createPokemon,
  getAllBattlePokemons,
} from "../../services/pokemonsApi";
import { useSnackbar } from "notistack";
import { usePokemons } from "../../context/PokemonsContext";
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  ImageSelectorContainer,
  ArrowButton,
  ImagePreviewContainer,
  PokemonImage,
  ImageInfo,
  ImageId,
  UsedWarning,
  SubmitButton,
} from "./CreatePokemon.styled";

const START_IMAGE_ID = 151;

const CreatePokemon = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { refreshPokemons } = usePokemons();

  const [usedImageIds, setUsedImageIds] = useState([]);
  const [imageId, setImageId] = useState(START_IMAGE_ID);

  const [form, setForm] = useState({
    name: "",
    weight: "",
    height: "",
    baseExperience: "",
  });

  // 🔹 pobieramy użyte grafiki
  useEffect(() => {
    const fetchUsedImages = async () => {
      try {
        const res = await getAllBattlePokemons();
        const ids = res.data.map((p) => p.imageId).filter(Boolean);
        setUsedImageIds(ids);
      } catch (error) {
        console.error("Błąd pobierania użytych grafik:", error);
      }
    };

    fetchUsedImages();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (usedImageIds.includes(imageId)) {
      enqueueSnackbar("Ta grafika jest już użyta", { variant: "error" });
      return;
    }

    try {
      await createPokemon({
        pokemonId: Date.now(), // unikalny ID
        name: form.name,
        weight: Number(form.weight),
        height: Number(form.height),
        baseExperience: Number(form.baseExperience),
        imageId: imageId,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`,
        wins: 0,
        loses: 0,
      });

      enqueueSnackbar(`Nowy pokemon ${form.name} został dodany`, {
        variant: "success",
      });

      // Odświeżamy listę pokemonów w kontekście
      await refreshPokemons();

      navigate("/");
    } catch {
      enqueueSnackbar("Błąd podczas tworzenia pokemona", { variant: "error" });
    }
  };

  return (
    <Container>
      <Title>Formularz tworzenia pokemona</Title>

      <Form onSubmit={handleCreate}>
        <FormGroup>
          <Label>Nazwa pokemona:</Label>
          <Input
            name="name"
            type="text"
            placeholder="Wprowadź nazwę pokemona"
            value={form.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Waga (kg):</Label>
          <Input
            name="weight"
            type="number"
            placeholder="Waga w kilogramach"
            value={form.weight}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Wzrost (dm):</Label>
          <Input
            name="height"
            type="number"
            placeholder="Wzrost w decymetrach"
            value={form.height}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Doświadczenie:</Label>
          <Input
            name="baseExperience"
            type="number"
            placeholder="Punkty doświadczenia"
            value={form.baseExperience}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Grafika pokemona (od {START_IMAGE_ID} wzwyż):</Label>

          <ImageSelectorContainer>
            <ArrowButton
              type="button"
              onClick={() =>
                setImageId((prev) => Math.max(START_IMAGE_ID, prev - 1))
              }
              disabled={imageId <= START_IMAGE_ID}
            >
              ◀
            </ArrowButton>

            <ImagePreviewContainer>
              <PokemonImage
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`}
                alt="pokemon preview"
                isUsed={usedImageIds.includes(imageId)}
              />
              <ImageInfo>
                <ImageId>ID: {imageId}</ImageId>
                {usedImageIds.includes(imageId) && (
                  <UsedWarning>⚠️ Ta grafika jest już użyta</UsedWarning>
                )}
              </ImageInfo>
            </ImagePreviewContainer>

            <ArrowButton
              type="button"
              onClick={() => setImageId((prev) => prev + 1)}
            >
              ▶
            </ArrowButton>
          </ImageSelectorContainer>
        </FormGroup>

        <SubmitButton type="submit" disabled={usedImageIds.includes(imageId)}>
          Stwórz
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default CreatePokemon;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createPokemon,
  getAllBattlePokemons,
} from "../../services/pokemonsApi";
import { usePokemons } from "../../context/PokemonsContext";
import { useSnackbar } from "notistack";
import {
  ArrowButton,
  Container,
  Form,
  FormGroup,
  ImageId,
  ImageInfo,
  ImagePreviewContainer,
  ImageSelectorContainer,
  Input,
  Label,
  PokemonImage,
  SubmitButton,
  Title,
  UsedWarning,
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
  const isImageUsed = usedImageIds.includes(imageId);

  useEffect(() => {
    const fetchUsedImages = async () => {
      const res = await getAllBattlePokemons();
      const ids = res.data.map((p) => p.imageId).filter(Boolean);

      setUsedImageIds(ids);
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

    await createPokemon({
      pokemonId: Date.now(), // unikalny ID
      name: form.name,
      weight: Number(form.weight),
      height: Number(form.height),
      baseExperience: Number(form.baseExperience),
      imageId,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`,
      wins: 0,
      loses: 0,
    });

    await refreshPokemons();

    enqueueSnackbar(`Nowy Pokémon ${form.name} został dodany`, {
      variant: "success",
    });

    navigate("/");
  };

  return (
    <Container>
      <Title>Stworz Pokemona</Title>

      <Form onSubmit={handleCreate}>
        <FormGroup>
          <Label htmlFor="name">Nazwa</Label>
          <Input
            id="name"
            name="name"
            placeholder="Nazwa"
            value={form.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="weight">Waga</Label>
          <Input
            id="weight"
            name="weight"
            type="number"
            placeholder="Waga"
            value={form.weight}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="height">Wzrost</Label>
          <Input
            id="height"
            name="height"
            type="number"
            placeholder="Wzrost"
            value={form.height}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="baseExperience">Doswiadczenie</Label>
          <Input
            id="baseExperience"
            name="baseExperience"
            type="number"
            placeholder="Doswiadczenie"
            value={form.baseExperience}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <ImageSelectorContainer>
          <ArrowButton
            type="button"
            disabled={imageId === START_IMAGE_ID}
            onClick={() =>
              setImageId((prev) => Math.max(START_IMAGE_ID, prev - 1))
            }
          >
            ◀
          </ArrowButton>

          <ImagePreviewContainer>
            <PokemonImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`}
              alt="pokemon"
              $isUsed={isImageUsed}
            />
            <ImageInfo>
              <ImageId>ID grafiki: {imageId}</ImageId>
              {isImageUsed ? (
                <UsedWarning>Ta grafika jest juz uzyta</UsedWarning>
              ) : null}
            </ImageInfo>
          </ImagePreviewContainer>

          <ArrowButton
            type="button"
            onClick={() => setImageId((prev) => prev + 1)}
          >
            ▶
          </ArrowButton>
        </ImageSelectorContainer>

        <SubmitButton type="submit">Stworz</SubmitButton>
      </Form>
    </Container>
  );
};

export default CreatePokemon;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { createPokemon, getAllBattlePokemons } from "../../services/pokemonApi";
import {
  createPokemon,
  getAllBattlePokemons,
} from "../../services/pokemonsApi";
import { useSnackbar } from "notistack";

const START_IMAGE_ID = 151;

const CreatePokemon = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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

    enqueueSnackbar(`Nowy Pokémon ${form.name} został dodany`, {
      variant: "success",
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleCreate}>
      <h2>Stwórz Pokémona</h2>

      <input
        name="name"
        placeholder="Nazwa"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="weight"
        type="number"
        placeholder="Waga"
        value={form.weight}
        onChange={handleChange}
        required
      />

      <input
        name="height"
        type="number"
        placeholder="Wzrost"
        value={form.height}
        onChange={handleChange}
        required
      />

      <input
        name="baseExperience"
        type="number"
        placeholder="Doświadczenie"
        value={form.baseExperience}
        onChange={handleChange}
        required
      />

      {/* 🔹 wybór grafiki */}
      <div>
        <button
          type="button"
          onClick={() =>
            setImageId((prev) => Math.max(START_IMAGE_ID, prev - 1))
          }
        >
          ◀
        </button>

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`}
          alt="pokemon"
          style={{
            opacity: usedImageIds.includes(imageId) ? 0.4 : 1,
          }}
        />

        <button type="button" onClick={() => setImageId((prev) => prev + 1)}>
          ▶
        </button>
      </div>

      <button type="submit">Stwórz</button>
    </form>
  );
};

export default CreatePokemon;

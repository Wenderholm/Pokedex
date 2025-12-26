import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
      style={{
        border: "1px solid #ccc",
        textTransform: "Uppercase",
        textAlign: "center",
        borderRadius: "8px",
        padding: "12px",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (
        (e.currentTarget.style.transform = "scale(1.05)"),
        (e.currentTarget.style.borderColor = "red")
      )}
      onMouseLeave={(e) => (
        (e.currentTarget.style.transform = "scale(1)"),
        (e.currentTarget.style.borderColor = "#ccc")
      )}
    >
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Exp: {pokemon.baseExperience}</p>
      <p>Wins: {pokemon.wins}</p>
      <p>Loses: {pokemon.loses}</p>
    </div>
  );
};

export default PokemonCard;

import { useForm } from "react-hook-form";

const PokemonForm = ({ defaultValues, onSubmit, isEdit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {!isEdit && (
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Nazwa pokemona:
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="Nazwa"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>
      )}

      <div>
        <label
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          {isEdit ? "Nowa waga (kg):" : "Waga (kg):"}
        </label>
        <input
          type="number"
          {...register("weight")}
          placeholder="Waga"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      <div>
        <label
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          {isEdit ? "Nowy wzrost (dm):" : "Wzrost (dm):"}
        </label>
        <input
          type="number"
          {...register("height")}
          placeholder="Wzrost"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      <div>
        <label
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          {isEdit ? "Nowe doświadczenie:" : "Doświadczenie:"}
        </label>
        <input
          type="number"
          {...register("baseExperience")}
          placeholder="EXP"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      {!isEdit && (
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            ID grafiki:
          </label>
          <input
            type="number"
            {...register("imageId")}
            placeholder="Grafika ID"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>
      )}

      <button
        type="submit"
        style={{
          padding: "15px 20px",
          fontSize: "18px",
          backgroundColor: isEdit ? "#FF9800" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        {isEdit ? "Zmień atrybuty" : "Stwórz"}
      </button>
    </form>
  );
};

export default PokemonForm;

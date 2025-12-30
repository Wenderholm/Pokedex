import { useEffect, useState } from "react";
import { getAllBattlePokemons } from "../../services/pokemonsApi";
import {
  Container,
  Title,
  Subtitle,
  CreateButtonContainer,
  CreateButton,
  PokemonGrid,
  PokemonCard,
  PokemonNumber,
  PokemonImage,
  PokemonInfo,
  PokemonName,
  PokemonStats,
  EditButton,
  EmptyMessage,
} from "./Edit.styled";

const Edit = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getAllBattlePokemons();
        setPokemons(response.data);
      } catch (error) {
        console.error("Błąd pobierania pokemonów:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <div>Ładowanie pokemonów...</div>;

  return (
    <Container>
      <Title>Edycja Pokemonów</Title>

      <CreateButtonContainer>
        <CreateButton to="/edit/create">Stwórz pokemona</CreateButton>
      </CreateButtonContainer>

      <Subtitle>Lista dostępnych pokemonów</Subtitle>

      <PokemonGrid>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.id}>
            <PokemonNumber>#{index + 1}</PokemonNumber>

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
                Waga: {pokemon.weight} | Wzrost: {pokemon.height} | Exp:{" "}
                {pokemon.baseExperience}
              </PokemonStats>
            </PokemonInfo>

            <EditButton to={`/edit/${pokemon.id}`}>Edytuj</EditButton>
          </PokemonCard>
        ))}
      </PokemonGrid>

      {pokemons.length === 0 && (
        <EmptyMessage>
          Brak pokemonów do edytowania. Stwórz pierwszego pokemona!
        </EmptyMessage>
      )}
    </Container>
  );
};

export default Edit;

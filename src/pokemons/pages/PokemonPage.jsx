import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Container } from "@mui/material";

import { getPokemonById } from "../helpers/PokemonsService";
import { TypesPokemon } from "../components";
import Loading from "../../ui/components/Loading";
import { UpperFirstLetter } from "../../ui/helpers/UpperFirstLetter";
import { PokemonDetails } from "../components/PokemonDetails";

export const PokemonPage = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [loading, SetLoading] = useState(true);

  const fetchPokemonById = async (id) => {
    const response = await getPokemonById(id);
    setPokemon(response);
    SetLoading(false);
  };

  useEffect(() => {
    fetchPokemonById(id);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ marginTop: "1.75rem" }}>
      {loading ? <Loading /> : <PokemonDetails pokemon={pokemon} />}
    </Container>
  );
};

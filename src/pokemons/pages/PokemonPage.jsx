import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getPokemonById } from "../helpers/PokemonsService";
import { Container, Grid } from "@mui/material";
import { PokemonCard } from "../components";

export const PokemonPage = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [loading, SetLoading] = useState(true);

  const getPokemon = async (id) => {
    const response = await getPokemonById(id);
    setPokemon(response);
    console.log(response);
  };

  useEffect(() => {
    getPokemon(id);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ marginTop: "1.75rem" }}>
      <Grid container spacing={12}>
        <PokemonCard pokemon={pokemon}></PokemonCard>
      </Grid>
    </Container>
  );
};

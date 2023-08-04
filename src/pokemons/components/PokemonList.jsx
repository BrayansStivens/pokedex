import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Grid } from "@mui/material";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {pokemonList.map(({ value }) => (
            <PokemonCard key={value.id} pokemon={value} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

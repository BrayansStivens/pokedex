import { Box, Container } from "@mui/material";
import { PokemonList } from "../components";
export const HomePage = () => {
  return (
    <>
      <Container maxWidth={"xl"} sx={{ marginTop: "1.75rem" }}>
        <PokemonList></PokemonList>
      </Container>
    </>
  );
};

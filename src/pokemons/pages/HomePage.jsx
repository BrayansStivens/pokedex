import { Box, Button, Container } from "@mui/material";
import { PokemonList } from "../components";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
export const HomePage = () => {
  const { loadMore } = useContext(PokemonContext);
  return (
    <>
      <Container maxWidth={"xl"} sx={{ margin: "1.75rem 0" }}>
        <PokemonList></PokemonList>
        <Box
          sx={{
            flexGrow: 1,
            marginTop: "0.75rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" sx={{ width: "35%" }} onClick={loadMore}>
            LOAD MORE...
          </Button>
        </Box>
      </Container>
    </>
  );
};

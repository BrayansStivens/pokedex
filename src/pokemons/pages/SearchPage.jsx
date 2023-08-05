import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonByName } from "../helpers/PokemonsService";
import { useEffect, useState } from "react";
import Loading from "../../ui/components/Loading";
import { PokemonDetails } from "../components/PokemonDetails";
import queryString from "query-string";
import { Container } from "@mui/material";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    const response = await getPokemonByName(q);
    setPokemon(response);
    setLoading(false);
  };

  useEffect(() => {
    if (q.length) {
      fetchPokemon();
    }
  }, [q]);

  return (
    <Container maxWidth="xl" sx={{ marginTop: "1.75rem" }}>
      {loading ? <Loading /> : <PokemonDetails pokemon={pokemon} />}
    </Container>
  );
};

import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { getAllPokemons } from "../pokemons/helpers/PokemonsService";
import Loading from "../ui/components/Loading";

export const PokemonProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListGlobal, setPokemonListGlobal] = useState([]);
  const [loading, SetLoading] = useState(true);

  const fetchAllPokemons = async (params = { limit: 50, offset }) => {
    const response = await getAllPokemons(params);
    setPokemonList([...pokemonList, ...response]);
    SetLoading(false);
  };

  const fetchGlobalPokemons = async () => {
    const response = await getAllPokemons({ limit: 1281, offset: 0 });
    setPokemonListGlobal(response);
    SetLoading(false);
  };

  useEffect(() => {
    fetchAllPokemons();
  }, [offset]);

  useEffect(() => {}, []);

  const loadMore = () => {
    setOffset(offset + 50);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <PokemonContext.Provider
          value={{
            pokemonList,
            pokemonListGlobal,
            loadMore,
          }}
        >
          {children}
        </PokemonContext.Provider>
      )}
    </>
  );
};

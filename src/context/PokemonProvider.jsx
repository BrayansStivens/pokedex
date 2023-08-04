import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { getAllPokemons } from "../pokemons/helpers/PokemonsService";
import { useForm } from "../hooks/useForm";

export const PokemonProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonListGlobal, setPokemonListGlobal] = useState([]);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  const fetchAllPokemons = async () => {
    const response = await getAllPokemons();
    setPokemonList([...pokemonList, ...response]);
  };

  const fetchGlobalPokemons = async () => {
    const response = await getAllPokemons({ limit: 1281, offset: 0 });
    setPokemonListGlobal(response);
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {}, []);

  return (
    <PokemonContext.Provider
      value={{
        searchText,
        onInputChange,
        onResetForm,
        pokemonList,
        pokemonListGlobal,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

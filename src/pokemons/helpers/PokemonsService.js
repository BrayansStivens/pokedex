const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemonByUrl = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching Pokémon with URL: ${url}`, error);
    throw error;
  }
};

const getAllPokemons = async (params) => {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${BASE_URL}/pokemon?${queryParams}`;
    const response = await fetch(url);
    const data = await response.json();

    //Llamar todas las solicitudes en paralelo
    const pokemonList = await Promise.allSettled(
      data.results.map(({ url }) => {
        return getPokemonByUrl(url);
      })
    );

    return pokemonList;
  } catch (error) {
    console.error("Error fetching Pokémon list", error);
    return;
  }
};

const getPokemonById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching Pokémon with ID: ${id}`, error);
    return;
  }
};
const getPokemonByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching Pokémon with Name: ${name}`, error);
    return;
  }
};

export { getAllPokemons, getPokemonById, getPokemonByName };

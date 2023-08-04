import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../ui/components";
import { HomePage, PokemonPage, SearchPage } from "../pokemons/pages";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="pokemon/:id" element={<PokemonPage />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </>
  );
};

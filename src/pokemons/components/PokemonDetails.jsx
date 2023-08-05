import { Typography } from "@mui/material";
import { UpperFirstLetter } from "../../ui/helpers/UpperFirstLetter";
import { TypesPokemon } from "./TypesPokemon";

export const PokemonDetails = ({ pokemon }) => {
  return (
    <>
      {pokemon?.id ? (
        <>
          <div className="header-main-pokemon">
            <span className="number-pokemon">#{pokemon.id}</span>
            <div className="container-img-pokemon">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${UpperFirstLetter(pokemon.name)}`}
              />
            </div>

            <div className="container-info-pokemon">
              <h1>{UpperFirstLetter(pokemon.name)}</h1>
              <TypesPokemon types={pokemon.types} />
              <div className="info-pokemon">
                <div className="group-info">
                  <p>Height</p>
                  <span>{pokemon.height}</span>
                </div>
                <div className="group-info">
                  <p>Weight</p>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-stats">
            <h1>Skills</h1>
            <div className="stats">
              {pokemon.abilities.map((ability) => (
                <div className="stat-group" key={ability.slot}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="container-stats">
            <h1>Statistics</h1>
            <div className="stats">
              <div className="stat-group">
                <span>Hp</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <div className="progress-bar"></div>
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginTop: "1.75rem" }}
        >
          Pokemon not found
        </Typography>
      )}
    </>
  );
};

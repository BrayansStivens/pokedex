import { Card, Grid, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { TypesPokemon } from "./TypesPokemon";

export const PokemonCard = ({ pokemon }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card>
        <Link to={`pokemon/${pokemon?.id}`}>
          <img
            src={pokemon?.sprites?.other?.home?.front_default}
            alt={pokemon?.name}
            width={"300px"}
          />
        </Link>

        <CardContent>
          <Typography variant="h6" component="div">
            {`N° ${pokemon.id}`}
          </Typography>
          <Link to={`pokemon/${pokemon.id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon?.name}
            </Typography>
          </Link>
          <TypesPokemon types={pokemon?.types} />
        </CardContent>
      </Card>
    </Grid>
  );
};

import { Grid, Typography, Box } from "@mui/material";

export const TypesPokemon = ({ types }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {types.map((type) => (
          <Grid item xs={0} key={type.slot}>
            <Typography
              variant="span"
              sx={{
                fontSize: "12px",
                padding: "5px 20px",
                borderRadius: "2.5px",
                color: "#fff",
              }}
              className={type.type.name}
            >
              {type.type.name.toUpperCase()}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

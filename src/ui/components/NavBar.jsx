import { AppBar, Toolbar, InputBase, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/pokedex_logo.png";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export const NavBar = () => {
  const navigate = useNavigate();
  const { numero } = useContext(PokemonContext);
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchText.toLocaleLowerCase().trim()}`);
    onResetForm();
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              sx={{
                width: "auto",
              }}
            >
              <NavLink to={"/"}>
                <img src={logo} alt="pokedex" width={"150px"} height={"55px"} />
              </NavLink>
            </IconButton>

            <form onSubmit={onSearchSubmit}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon></SearchIcon>
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{
                    "aria-label": "search",
                    value: searchText,
                    name: "searchText",
                    onChange: onInputChange,
                  }}
                />
              </Search>
            </form>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

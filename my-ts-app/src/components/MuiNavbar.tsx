import React from "react";
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          Pokemonapp
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit" variant="outlined">
            Features
          </Button>
          <Button color="inherit" variant="outlined">
            Pricing
          </Button>
          <Button color="inherit" variant="outlined">
            About
          </Button>
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;

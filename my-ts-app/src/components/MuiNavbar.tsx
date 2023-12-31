import React, { useState } from "react";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const MuiNavbar = () => {
  const [anchrEl, setanchrEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchrEl);
  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setanchrEl(event?.currentTarget);
  };
  const handleClose = () => {
    setanchrEl(null);
  };
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
          <Button
            color="inherit"
            variant="outlined"
            id="resources-button"
            onClick={handleChange}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchrEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;

import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const MuiDrawer = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => setisDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        console.log("umar")
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box p={2} width={"250px"} role="presentation" textAlign={"center"}>
          <Typography variant="h6" component={"div"}>
            {" "}
            sidebar
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;

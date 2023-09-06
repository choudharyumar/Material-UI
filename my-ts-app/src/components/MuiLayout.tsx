import React from "react";
import { Box, Divider, Stack } from "@mui/material";
const MuiLayout = () => {
  return (
    // stack is useful for one dimensional layout
    <Stack
      sx={{ border: "2px solid" }}
      direction={"row"}
      spacing={3}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "secondary.main",
          },
        }}
      >
        ghhg
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Stack>
  );
};

export default MuiLayout;

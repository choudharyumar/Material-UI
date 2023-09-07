import React from "react";
import { Box, Divider, Stack, Grid, Paper } from "@mui/material";
const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
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
      <Grid container my={4} rowSpacing={2} columnSpacing={16}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;

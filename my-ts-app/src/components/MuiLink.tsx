import React from "react";
import { Link, Stack, Typography } from "@mui/material";
const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#" sx={{ fontSize: "24px" }} variant="body2">
        Link
      </Link>
      <Typography variant={"h6"}>
        <Link href="#" color={"secondary"} underline="hover">
          secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;

import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
const MuiLoadingButton = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <LoadingButton variant="outlined">submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        submit
      </LoadingButton>

      <LoadingButton loadingIndicator="Loading..." variant="outlined">
        fetch data
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
        fetch data
      </LoadingButton>

      <LoadingButton
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        save
      </LoadingButton>

      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;

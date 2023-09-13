import React from "react";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const MuiAlert = () => {
  return (
    <Stack spacing={3}>
      <Alert severity="error">this is the error</Alert>
      <Alert severity="warning">this is the warning</Alert>
      <Alert severity="info">this is the info</Alert>
      <Alert severity="success">this is the success</Alert>

      <Alert
        variant="outlined"
        severity="error"
        onClose={() => {
          alert("error clicked");
        }}
      >
        this is the error
      </Alert>
      <Alert variant="outlined" severity="warning">
        this is the warning
      </Alert>
      <Alert variant="outlined" severity="info">
        this is the info
      </Alert>
      <Alert variant="outlined" severity="success">
        this is the success
      </Alert>

      <Alert variant="filled" severity="error">
        <AlertTitle>error</AlertTitle>
        this is the error
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>warning</AlertTitle>
        this is the warning
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>info</AlertTitle>
        this is the info
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={<Button color="inherit">undo</Button>}
      >
        <AlertTitle>success</AlertTitle>
        this is the success
      </Alert>
    </Stack>
  );
};

export default MuiAlert;

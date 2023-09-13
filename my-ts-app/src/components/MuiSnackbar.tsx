import React from "react";
import { useState, forwardRef } from "react";
import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);
const MuiSnackbar = () => {
  const [open, setopen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setopen(false);
  };
  return (
    <>
      <Button onClick={() => setopen(true)} variant="contained">
        Submit
      </Button>
      {/* <Snackbar
        message="form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      ></Snackbar> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;

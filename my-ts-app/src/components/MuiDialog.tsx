import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
const MuiDialog = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setopen(true);
        }}
      >
        open dialog
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setopen(false);
        }}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            are you sure to submit
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setopen(false);
            }}
          >
            cance
          </Button>
          <Button
            onClick={() => {
              setopen(false);
            }}
            autoFocus
          >
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;

import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
  const [value, setvalue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <br /> <br />
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="form input"
          required
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          error={!value}
          helperText={!value ? "required" : "do not share password"}
        />
        <TextField
          label="password"
          type="password"
          helperText="donot share your password with others"
        />
        <TextField label="Read only" inputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;

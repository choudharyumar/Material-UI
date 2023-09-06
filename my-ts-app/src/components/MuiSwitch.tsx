import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";
const MuiSwitch = () => {
  const [checked, setchecked] = useState(false);
  console.log(checked);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setchecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiSwitch;

import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
const MuiSelect = () => {
  const [countries, setcountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setcountry(event.target.value as string);
    const value = event.target.value;
    setcountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width={"250px"}>
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        size="medium"
        color="secondary"
        helperText="please select the country"
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="pak">Pakistan</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;

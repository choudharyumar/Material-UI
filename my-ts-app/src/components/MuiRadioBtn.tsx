import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
const MuiRadioBtn = () => {
  const [value, setvalue] = useState("");
  console.log({ value });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value={"0-2"}
          />
          <FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
          <FormControlLabel control={<Radio />} label="6-10" value={"6-10"} />
        </RadioGroup>
        <FormHelperText>invlaid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioBtn;

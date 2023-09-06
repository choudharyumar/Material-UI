import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { type } from "os";

// create the object
type Skill = {
  id: number;
  label: string;
};

const skills = ["html", "css", "javascript", "typescript", "react"];
const skillOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
const MuiAutoComplete = () => {
  const [value, setvalue] = useState<string | null>(null);
  const [skill, setskill] = useState<Skill | null>(null);
  console.log(skill);
  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(event: any, newvalue: string | null) => {
          setvalue(newvalue);
        }}
      />

      <Autocomplete
        options={skillOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newvalue: Skill | null) => {
          setskill(newvalue);
        }}
      />
    </Stack>
  );
};

export default MuiAutoComplete;

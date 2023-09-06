import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  FormControl,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const MuiCheckbox = () => {
  const [accepttnc, setchecktnc] = useState(false);
  const [skill, setskill] = useState<string[]>([]);

  console.log(skill);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setchecktnc(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skill.indexOf(event.target.value);
    if (index === -1) {
      setskill([...skill, event.target.value]);
    } else {
      setskill(skill.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="accept the terms and conditons"
          control={
            <Checkbox
              color="secondary"
              size="medium"
              checked={accepttnc}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={accepttnc}
          onChange={handleChange}
          size="medium"
          color="secondary"
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel> skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={"HTML"}
                  checked={skill.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={"CSS"}
                  checked={skill.includes("CSS")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="javascript"
              control={
                <Checkbox
                  value={"javascript"}
                  checked={skill.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;

import React, { useState } from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
const MuiChip = () => {
  const [chips, setchips] = useState(["chip1", "chip2", "chip3"]);
  const handleChange = (chiptoDelete: string) => {
    setchips((chips) => chips.filter((chip) => chip !== chiptoDelete));
  };
  return (
    <Stack direction={"row"} spacing={4}>
      <Chip label="chip" color="primary" size="medium" icon={<FaceIcon />} />
      <Chip
        label="chip outlined"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>v</Avatar>}
      />
      <Chip
        label="click"
        color="success"
        onClick={() => {
          alert("clicked");
        }}
      />

      <Chip
        label="Delete"
        color="error"
        onClick={() => {
          alert("clicked");
        }}
        onDelete={() => {
          alert("delete handler called");
        }}
      />
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => {
            handleChange(chip);
          }}
        />
      ))}
    </Stack>
  );
};

export default MuiChip;

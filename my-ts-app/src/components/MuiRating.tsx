import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const MuiRating = () => {
  const [value, setvalue] = useState<number | null>(3);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newvalue: number | null
  ) => {
    setvalue(newvalue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="secondary" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly //when we set the value of at usestate and kept readonly than this show give the star value
        highlightSelectedOnly // this only highlight the star number
      />
    </Stack>
  );
};

export default MuiRating;

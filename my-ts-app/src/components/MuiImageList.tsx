import React from "react";
import { Stack,ImageList,ImageListItem,Box } from "@mui/material";
const MuiImageList = () => {
  return <Stack spacing={4}>
    <ImageList sx={{width:500,height:450}} cols={3} rowHeight={164}>
        {
            itemData.map(item=>(<ImageListItem key={item.img}>.
            
        }

    </ImageList>
  </Stack>;
};

export default MuiImageList;

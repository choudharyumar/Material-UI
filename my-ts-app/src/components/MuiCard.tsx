import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height={140}
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            React
          </Typography>
          <Typography gutterBottom variant="body2" color={"text.secondary"}>
            hello when you work hard than you find the reward
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            share
          </Button>
          <Button size="small" color="info">
            learn more
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;

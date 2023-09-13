import React, { useState, useEffect } from "react";
import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    // <Stack spacing={4} width={"350px"}>
    //   <Skeleton variant="text" animation="wave" />
    //   <Skeleton variant="circular" width={40} height={40} animation="wave" />
    //   <Skeleton
    //     variant="rectangular"
    //     width={240}
    //     height={140}
    //     animation="wave"
    //   />
    // </Stack>
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>v</Avatar>
        )}

        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton
                  variant="text"
                  width={"100%"}
                  animation="wave"
                ></Skeleton>
              </Typography>

              <Typography variant="body2">
                <Skeleton
                  variant="text"
                  width={"100%"}
                  animation="wave"
                ></Skeleton>
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1"> React mui tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;

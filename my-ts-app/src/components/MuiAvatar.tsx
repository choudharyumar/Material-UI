import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";
const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>Ck</Avatar>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>Ck</Avatar>

          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 64, height: 64 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 84, height: 84 }}
        >
          Ck
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;

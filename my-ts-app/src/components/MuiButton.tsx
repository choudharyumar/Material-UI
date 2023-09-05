import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
const MuiButton = () => {
  const [format, setformat] = useState<string | null>(null);
  console.log(format);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,

    updatedFormats: string | null
  ) => {
    setformat(updatedFormats);
  };
  return (
    <Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://www.facebook.com/">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={6} direction={"row"}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>

        <Button variant="contained" color="error">
          error
        </Button>

        <Button variant="contained" color="warning">
          warning
        </Button>

        <Button variant="contained" color="info">
          info
        </Button>

        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display={"block"} spacing={4} direction={"row"}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            alert("clicked");
          }}
        >
          large
        </Button>
      </Stack>
      <Stack spacing={4} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          send
        </Button>
      </Stack>
      <IconButton aria-label="send" color="success" size="small">
        <SendIcon />
      </IconButton>
      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="medium"
          color="error"
          aria-label="alignment button group"
        >
          <Button>small</Button>
          <Button>medium</Button>
          <Button>large</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatChange}
          size="medium"
          color="info"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underlined"} aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;

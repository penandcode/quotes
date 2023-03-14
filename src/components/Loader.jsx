import React from "react";
import { CircularProgress, Box, Stack } from "@mui/material";

function Loader() {
  return (
    <Box>
      <Stack>
        <CircularProgress />
        Loading...
      </Stack>
    </Box>
  );
}

export default Loader;

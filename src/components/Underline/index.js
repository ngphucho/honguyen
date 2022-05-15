import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Stack } from "@mui/material";
import Theme from "../UI/Theme";

export default function Underline({ mb }) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      color={Theme.palette.common.colorPrimary}
      marginBottom={mb !== undefined ? mb : "20px"}
    >
      <CircleIcon sx={{ fontSize: 8 }} />
      <CircleIcon sx={{ fontSize: 12 }} />
      <CircleIcon sx={{ fontSize: 8 }} />
      {/* {console.log("mb = ",mb)} */}
    </Stack>
  );
}

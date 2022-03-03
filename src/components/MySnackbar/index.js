import React from "react";
import { Snackbar, Alert } from "@mui/material";

export default function MySnackbar({ open, setOpen, data }) {
  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={data.type}>
        {data.msg}
      </Alert>
    </Snackbar>
  );
}

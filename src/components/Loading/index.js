import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";

export default function index() {
  return (
    <div className="loading">
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <LinearProgress sx={{ width: "100%", mx: 10 }} /> */}
        <CircularProgress size={100} />
      </Box>
    </div>
  );
}

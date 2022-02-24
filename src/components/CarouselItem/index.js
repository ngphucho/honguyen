import React from "react";
import { Paper, Button } from "@mui/material";

export default function CarouselItem({ item }) {
  return (
    <Paper
      sx={{
        boxShadow: "none",
        position: "relative",
        height: 300,
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <div style={{ position: "absolute", height: 300 }}>
        <img src={item.image} alt={item.name} style={{ width: "100%" }} />
      </div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </Paper>
  );
}

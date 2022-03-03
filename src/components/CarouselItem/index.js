import React from "react";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "none",
    position: "relative",
    height: 450,
    overflow: "hidden",
    borderRadius: 0,
  },
  box: {
    background: "rgb(224,224,224)",
    background:
      "linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(245,245,245,0.5) 25%, rgba(255,255,255,0.1) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  oddBox: {
    transform: "rotate(180deg)",
    background: "rgb(189,189,189)",
    background:
      "linear-gradient(90deg, rgba(189,189,189,1) 0%, rgba(245,245,245,0.5) 25%, rgba(255,255,255,0.1) 100%)",
  },
}));

export default function CarouselItem({ item, index }) {
  const classes = useStyles();
  return (
    <Paper>
      <div style={{ position: "relative", height: 450 }}>
        <img src={item.image} alt={item.name} style={{ width: "100%", }} />
      </div>
      <div
        className={
          `${classes.box} ` + (index % 2 === 1 ? `${classes.oddBox}` : "")
        }
      ></div>
    </Paper>
  );
}

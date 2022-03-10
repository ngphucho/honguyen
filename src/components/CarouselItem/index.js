import React from "react";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "none",
    position: "relative",
    height: "35vw",
    overflow: "hidden",
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      height: "50vw",
    },
  },
  mainDiv: {
    position: "relative",
    height: "35vw",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.down("sm")]: {
      height: "50vw",
    },
  },
  box: {
    background: "rgb(224,224,224)",
    background:
      "linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(245,245,245,0.5) 25%, rgba(255,255,255,0.1) 100%)",
    position: "absolute",
    top: -1,
    left: -1,
    bottom: -1,
    right: -1,
    [theme.breakpoints.down("sm")]: {
      background:
        "linear-gradient(0, rgba(224,224,224,1) 0%, rgba(245,245,245,0.5) 25%, rgba(255,255,255,0.1) 100%)",
    },
  },
  oddBox: {
    transform: "rotate(180deg)",
    background: "rgb(189,189,189)",
    background:
      "linear-gradient(90deg, rgba(189,189,189,1) 0%, rgba(245,245,245,0.5) 25%, rgba(255,255,255,0.1) 100%)",
    [theme.breakpoints.down("sm")]: {
      background:
        "linear-gradient(180deg, rgba(189,189,189,1) 0%, rgba(245,245,245,0.5) 25%, rgba(255,255,255,0.1) 100%)",
    },
  },
}));

export default function CarouselItem({ item, index }) {
  const classes = useStyles();
  return (
    <Paper>
      <div className={classes.mainDiv}>
        <img src={item.image} alt={item.name} style={{ maxWidth: "100%" }} />
      </div>
      <div
        className={
          `${classes.box} ` + (index % 2 === 1 ? `${classes.oddBox}` : "")
        }
      ></div>
    </Paper>
  );
}

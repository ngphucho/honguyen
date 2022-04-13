import React, { Fragment } from "react";
import Marque from "react-fast-marquee";
import { makeStyles } from "@mui/styles";
import { Box, ListItemAvatar, Avatar, ListItemText, Icon } from "@mui/material";

const data = [
  { text: "HTML", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { text: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  {
    text: "JAVASCRIPT",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  { text: "REACTJS", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  {
    text: "MATERIAL UI",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    text: "BOOTSTRAP",
    icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
];

const useStyles = makeStyles((theme) => ({
  box: {
    cursor: "default",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "'Archivo Black', sans-serif",
    minWidth: 200,
    boxSizing: "border-box",
    transition: "filter 1.5s",
    filter: "grayscale(100%)",
    "&:hover": { filter: "grayscale(0%)" },
  },
}));

export default function MyMarquee() {
  const classes = useStyles();
  return (
    <Fragment>
      <Marque
        pauseOnHover={true}
        gradient={false}
        style={{ overflow: "hidden" }}
      >
        {data.map((item) => (
          <Box
            className={classes.box}
            sx={{
              fontSize: { xs: 14, sm: 16, md: 20 },
              height: { xs: 30, md: 50 },
              my: 0,
              mx: { xs: "10px", sm: "30px", md: "40px", xl: "50px" },
            }}
          >
            <Icon
              sx={{
                fontSize: { xs: 16, sm: 18, md: 22 },
                textAlign: "center",
                pr: 1,
              }}
            >
              <img src={item.icon} alt="mui icon" style={{ height: "100%" }} />
            </Icon>
            {item.text}
          </Box>
        ))}
      </Marque>
    </Fragment>
  );
}

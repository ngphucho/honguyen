import React from "react";

import { makeStyles } from "@mui/styles";
// import { useNavigate } from "react-router-dom";
import AboutLeftColumn from "./AboutLeftColumn";
import AboutRightColumn from "./AboutRightColumn";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import AnimatedPage from "../../components/AnimatedPage";

const useStyles = makeStyles((theme) => ({
  leftColumn: {
    "&.MuiGrid-root": {
      backgroundColor: theme.palette.common.bg1,
      backgroundClip: "content-box",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  // const navigate = useNavigate();
  return (
    <AnimatedPage>
      <div className="about">
        {/* <Container> */}
          <Grid container spacing={3}>
            {/* Left column */}
            <Grid item container md={3} sm={5} className={classes.leftColumn}>
              <AboutLeftColumn />
            </Grid>

            {/* Right column */}
            <Grid item md={9} sm={7} className="profile-box-right">
              <AboutRightColumn />
            </Grid>
          </Grid>
        {/* </Container> */}
      </div>
    </AnimatedPage>
  );
}

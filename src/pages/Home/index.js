import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Fab, Container } from "@mui/material";
import WaveEffect from "../../components/WaveEffect";

const useStyles = makeStyles((theme) => ({
  home: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    alignContent: "stretch",
    // marginBottom: "-1.5rem",
  },
  left: {
    "&.MuiGrid-root": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontSize: "1.4rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.1rem",
      },
    },
  },
  greeting: {
    "&.MuiTypography-root": {
      marginBottom: "1rem",
      color: theme.palette.common.textColor2,
      fontSize: "1em",
    },
  },
  introduce: {
    "&.MuiTypography-root": {
      marginBottom: "1rem",
      color: theme.palette.common.textColor2,
      fontSize: "2.5em",
      [theme.breakpoints.down("md")]: {
        fontSize: "2em",
      },
    },
  },
  description: {
    "&.MuiTypography-root": {
      marginBottom: "1rem",
      color: theme.palette.common.textColor2,
      fontSize: "0.7em",
    },
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  right: {
    "&.MuiGrid-root": {
      // display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
  pictureBox: {
    minWidth: 260,
    width: "60%",
    height: "75%",
    backgroundColor: theme.palette.common.bg2,
    position: "relative",
    overflow: "visible",
    zIndex: 1,
    "&::before": {
      content: '""',
      display: "block",
      width: "70%",
      height: "70%",
      backgroundColor: "inherit",
      position: "absolute",
      left: -10,
      top: -10,
      zIndex: 0,
    },
    "&::after": {
      content: '""',
      display: "block",
      width: "70%",
      height: "70%",
      backgroundColor: "inherit",
      position: "absolute",
      right: -10,
      bottom: -10,
      zIndex: 0,
    },
  },
  pictrue: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "inherit",
    backgroundImage: "url(/images/avatar.jpg)",
    filter: "grayscale(80%)",
    backgroundSize: "cover",
    zIndex: 1,
  },
}));

export default function Home() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <AnimatedPage>
      <Container id="home">
        <div className={classes.home}>
          <Grid
            container
            sx={{
              background:
                "radial-gradient(circle, #424242 , #303030, #212121 90%)",
            }}
          >
            <Grid item container sm={6} xs={12} className={classes.left}>
              <Typography
                sx={{ textAlign: { xs: "center", sm: "left" } }}
                className={classes.greeting}
              >
                Hello, my name is{" "}
                <span
                  style={{
                    fontWeight: 800,
                    fontFamily: "Raleway, sans-serif",
                  }}
                >
                  Nguyen Phuc Ho
                </span>
              </Typography>
              <Typography
                sx={{ textAlign: { xs: "center", sm: "left" } }}
                className={classes.introduce}
              >
                I'm a Developer
              </Typography>
              <Typography
                sx={{ textAlign: { xs: "center", sm: "justify" } }}
                className={classes.description}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                veniam beatae, eaque ullam dolor asperiores nihil, ducimus id
                qui, aliquid sunt minima perferendis in optio laboriosam
                doloremque voluptatibus dolores rerum?
              </Typography>
              <div className={classes.button}>
                <Fab
                  sx={{ mr: 3, minWidth: 120 }}
                  color="info"
                  variant="extended"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  CV
                </Fab>
                <Fab
                  sx={{ minWidth: 120 }}
                  color="secondary"
                  variant="extended"
                  onClick={() => {
                    navigate("/project");
                  }}
                >
                  Project
                </Fab>
              </div>
            </Grid>
            <Grid
              item
              container
              sm={6}
              sx={{ display: { xs: "none", sm: "flex" } }}
              className={classes.right}
            >
              <div className={classes.pictureBox}>
                <div className={classes.pictrue} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </AnimatedPage>
  );
}

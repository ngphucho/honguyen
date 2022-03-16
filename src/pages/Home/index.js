import React from "react";
import AnimatedPage from "../../components/AnimatedPage";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button, Fab } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "calc(100vh - 64px - 1.5rem)",
    display: "flex",
    alignContent: "stretch",
  },
  left: {
    "&.MuiGrid-root": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  greeting: {
    "&.MuiTypography-root": {
      marginBottom: "1rem",
      color: theme.palette.common.textColor2,
    },
  },
  introduce: {
    "&.MuiTypography-root": {
      marginBottom: "1rem",
      color: theme.palette.common.textColor2,
    },
  },
  description: {
    "&.MuiTypography-root": {
      marginBottom: "1rem",
      color: theme.palette.common.textColor2,
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
    backgroundColor: "red",
    position: "relative",
    overflow: "visible",
    zIndex: 1,
    "&::before": {
      content: '""',
      display: "block",
      width: "70%",
      height: "70%",
      backgroundColor: "white",
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
      backgroundColor: "white",
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
    // backgroundColor: "green",
    backgroundImage: "url(/images/avatar.jpg)",
    backgroundSize: 'cover',
    zIndex: 1,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <AnimatedPage>
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
              variant="h6"
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
              variant="h3"
            >
              I'm a Developer
            </Typography>
            <Typography
              sx={{ textAlign: { xs: "center", sm: "justify" } }}
              className={classes.description}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              veniam beatae, eaque ullam dolor asperiores nihil, ducimus id qui,
              aliquid sunt minima perferendis in optio laboriosam doloremque
              voluptatibus dolores rerum?
            </Typography>
            <div className={classes.button}>
              <Fab
                sx={{ mr: 1, minWidth: 120 }}
                color="info"
                variant="extended"
              >
                CV
              </Fab>
              <Fab sx={{ minWidth: 120 }} color="secondary" variant="extended">
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
    </AnimatedPage>
  );
}

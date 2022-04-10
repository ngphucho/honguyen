import React, { useEffect } from "react";
import AnimatedPage from "../../components/AnimatedPage";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Fab, Container } from "@mui/material";
import { scroller } from "react-scroll";
import $ from "jquery";
import "jquery.ripples";
import TypeWriter from "typewriter-effect";

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
      marginBottom: "1.5rem",
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
      transition: "all .6s",
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
      transition: "all .6s",
    },
    "&:hover::after, &:hover::before": {
      boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 16px",
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
    transition: "all 3s",
    "&:hover": {
      filter: "grayscale(50%)",
    },
  }
}));

export default function Home({ setValue, setIsSpy }) {
  const classes = useStyles();
  // waveEffect
  useEffect(() => {
    $(".waveEffect").ripples({
      dropRadius: 20,
      perturbance: 0.03,
      resolution: 512,
    });
    // return $(".homme").ripples("destroy");
  }, []);
  return (
    <AnimatedPage>
      <div className="waveEffect">
        <Container id="home">
          <div className={classes.home}>
            <Grid
              container
              // sx={{
              //   background:
              //     "radial-gradient(circle, #424242 , #303030, #212121 90%)",
              //   maxWidth: "1600px",
              //   marginLeft: "auto",
              //   marginRight: "auto",
              // }}
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
                  I'm{" "}
                  <span style={{ display: "inline-block" }}>
                    <TypeWriter
                      options={{ loop: true, cursor: '_' }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(1000)
                          .typeString("a Developer")
                          .pauseFor(1000)
                          .deleteAll()
                          .pauseFor(1000)
                          .typeString("looking for a job")
                          .pauseFor(1000)
                          .deleteAll()
                          .start();
                      }}
                    />
                  </span>
                </Typography>
                <Typography
                  sx={{ textAlign: { xs: "center", sm: "justify" } }}
                  className={classes.description}
                >
                  I'm a Front-End Web Developer. My expertise is to create websites with ReactJS, Redux, JavaScript,...
                </Typography>
                <div className={classes.button}>
                  <Fab
                    sx={{ mr: 3, minWidth: 120 }}
                    color="info"
                    variant="extended"
                    onClick={() => {
                      setValue(1); //about page have index = 1
                      setIsSpy(false);
                      setTimeout(() => {
                        setIsSpy(true);
                      }, 1000);
                      scroller.scrollTo("about", {
                        smooth: true,
                        duration: 600,
                        offset: -64,
                      });
                    }}
                  >
                    CV
                  </Fab>
                  <Fab
                    sx={{ minWidth: 120 }}
                    color="secondary"
                    variant="extended"
                    onClick={() => {
                      setValue(3); //project page have index = 3
                      setIsSpy(false);
                      setTimeout(() => {
                        setIsSpy(true);
                      }, 1000);
                      scroller.scrollTo("project", {
                        smooth: true,
                        duration: 600,
                        offset: -64,
                      });
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
      </div>
    </AnimatedPage>
  );
}

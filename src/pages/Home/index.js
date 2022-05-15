import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Fab, Container, Avatar } from "@mui/material";
import { scroller } from "react-scroll";
import $ from "jquery";
import "jquery.ripples";
import TypeWriter from "typewriter-effect";
import Follow from "../../components/Follow";
import myAvatar from "../../assets/images/file004511.png";
import background from "../../assets/images/bg.png";
import Theme from "../../components/UI/Theme";

const scrollOffset = 0;
const scrollDuration = 2000;

const useStyles = makeStyles((theme) => ({
  home: {
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
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
      fontSize: "1.5em",
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
  avatarBox: {
    position: "relative",
    marginTop: 40,
    width: 240,
    height: 240,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(transparent 0%, transparent 5%, ${
      theme.palette.common.colorPrimary + "40"
    } 50%,${theme.palette.common.colorPrimary} 100%)`,
    borderRadius: "50%",
    "&::before": {
      content: "''",
      display: "block",
      width: 230,
      height: 230,
      borderRadius: "50%",
      backgroundColor: "#1f1f38",
      backgroundImage: `url(${background})`,
    },
  },
  avatar: {
    "&.MuiAvatar-root": {
      position: "absolute",
      backgroundColor: "#1f1f38",
      backgroundImage: `url(${background})`,
      width: 200,
      height: 200,
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
    marginTop: 20,
    width: "16rem",
    height: "20rem",
    background: `linear-gradient(${theme.palette.common.colorPrimary}, transparent)`,
    borderRadius: "12rem 12rem 0 0",
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
  },
  pictrue: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    backgroundImage: "url(/images/avatar.jpg)",
    filter: "grayscale(80%)",
    backgroundSize: "cover",
    transition: "all 3s",
    "&:hover": {
      filter: "grayscale(50%)",
    },
  },
}));

export default function Home({ myRef, inViewport }) {
  const classes = useStyles();
  // waveEffect
  useEffect(() => {
    $(".waveEffect").ripples({
      dropRadius: 20,
      perturbance: 0.03,
      resolution: 512,
    });
    // return $(".waveEffect").ripples("destroy");
  }, []);
  return (
    <div className="waveEffect">
      <Container id="home">
        <div className={classes.home}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{
              pt: 5,
              height: "100%",
              position: "relative",
            }}
          >
            {/* Left */}
            <Typography className={classes.greeting}>
              Hello, my name is{" "}
              <span
                style={{
                  background: Theme.palette.common.colorBGVariant,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                Nguyen Phuc Ho
              </span>
            </Typography>
            <Typography className={classes.introduce}>
              I'm{" "}
              <span style={{ display: "inline-block" }}>
                <TypeWriter
                  options={{ loop: true, cursor: "_" }}
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
            <Typography className={classes.description}>
              I'm a Front-End Web Developer. My expertise is to create websites
              with ReactJS, Redux, JavaScript,...
            </Typography>
            <div className={classes.button}>
              <Fab
                sx={{ mr: 3, minWidth: 120 }}
                color="info"
                variant="extended"
                onClick={() => {
                  scroller.scrollTo("about", {
                    smooth: true,
                    duration: scrollDuration,
                    offset: scrollOffset,
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
                  scroller.scrollTo("project", {
                    smooth: true,
                    duration: scrollDuration,
                    offset: scrollOffset,
                  });
                }}
              >
                Project
              </Fab>
            </div>
            <div className={classes.avatarBox} ref={myRef}>
              <Avatar
                className={classes.avatar}
                alt="Ho Nguyen"
                src={myAvatar}
                sx={{
                  transition: "all 1s",
                  height: inViewport ? "100%" : "0px",
                  opacity: inViewport ? 1 : 0,
                  transform: inViewport ? "translateY(0)" : "translateY(20px)",
                }}
              >
                H
              </Avatar>
            </div>
            <Follow />
          </Grid>
        </div>
      </Container>
    </div>
  );
}

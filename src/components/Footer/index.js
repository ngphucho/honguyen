import { Avatar, Grid, Icon, Stack } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "../../assets/icons/icons8-facebook.svg";
import ZaloIcon from "../../assets/icons/icons8-zalo.svg";
import GithubIcon from "../../assets/icons/icons8-github.svg";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/software-development.json";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.main,
    minHeight: 64,
  },
  avatarContainer: {
    "&.MuiAvatar-root": {
      width: 50,
      height: 50,
      backgroundColor: "#fff",
    },
  },
  iconContainer: {
    "&.MuiIcon-root": {
      width: 32,
      height: 32,
    },
  },
  imgContainer: {
    width: "100%",

  },
}));

export default function Footer() {
  const classes = useStyles();
  const defaultOtions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSetting: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Grid container className={classes.footerContainer}>
        <Grid item xs>
          <Lottie options={defaultOtions} height={100} width={100} />
        </Grid>
        <Grid item container xs alignItems="center">
          <Stack direction="row" spacing={2}>
            <Avatar className={classes.avatarContainer}>
              <Icon className={classes.iconContainer}>
                <img className={classes.imgContainer} src={FacebookIcon} />
              </Icon>
            </Avatar>
            <Avatar className={classes.avatarContainer}>
              <Icon className={classes.iconContainer}>
                <img className={classes.imgContainer} src={GithubIcon} />
              </Icon>
            </Avatar>
            <Avatar className={classes.avatarContainer}>
              <Icon className={classes.iconContainer}>
                <img className={classes.imgContainer} src={ZaloIcon} />
              </Icon>
            </Avatar>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

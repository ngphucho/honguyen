import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Grid,
  Icon,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "../../assets/icons/icons8-facebook.svg";
import ZaloIcon from "../../assets/icons/icons8-zalo.svg";
import GithubIcon from "../../assets/icons/icons8-github.svg";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/software-development.json";
import { Link as Scroll } from "react-scroll";
import MyMarquee from "../MyMarquee";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#191919",
    minHeight: 64,
    "&.MuiGrid-root": {
      flexDirection: "column",
    },
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

export default function Footer({
  value: index,
  setValue,
  tabInfo: menu,
  isSpy,
  setIsSpy,
}) {
  const navigate = useNavigate();
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
    <div className="footer">
      <Grid container className={classes.footerContainer}>
        {/* Lottie Icon */}
        <Grid item xs>
          <Lottie options={defaultOtions} height={100} width={100} />
        </Grid>
        {/* Footer Navigator */}
        <Grid
          item
          container
          xs
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <List sx={{ display: "flex" }}>
            {menu.map((item) => (
              <ListItemButton
                key={item.index}
                selected={item.index === index}
                disabled={item.index === index}
              >
                <ListItemText
                  sx={{ textTransform: "capitalize", color: "#fff" }}
                >
                  <Scroll
                    to={item.label}
                    smooth={true}
                    spy={isSpy}
                    duration={600}
                    offset={-64}
                    onSetActive={() => {
                      setValue(item.index);
                    }}
                    onClick={() => {
                      setValue(item.index);
                      setIsSpy(false);
                      setTimeout(() => {
                        setIsSpy(true);
                      }, 1000);
                    }}
                  >
                    {item.label}
                  </Scroll>
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        {/* Follow */}
        <Grid
          item
          container
          xs
          sx={{ alignItems: "center", justifyContent: "center", padding: 2 }}
        >
          <Stack direction="row" spacing={2}>
            <Link
              href="https://www.facebook.com/nguyen.phuc.ho.91"
              target="_blank"
            >
              <Avatar className={classes.avatarContainer}>
                <Icon className={classes.iconContainer}>
                  <img className={classes.imgContainer} src={FacebookIcon} />
                </Icon>
              </Avatar>
            </Link>
            <Link href="https://github.com/ngphucho" target="_blank">
              <Avatar className={classes.avatarContainer}>
                <Icon className={classes.iconContainer}>
                  <img className={classes.imgContainer} src={GithubIcon} />
                </Icon>
              </Avatar>
            </Link>
            <Link href="https://zalo.me/0356046662" target="_blank">
              <Avatar className={classes.avatarContainer}>
                <Icon className={classes.iconContainer}>
                  <img className={classes.imgContainer} src={ZaloIcon} />
                </Icon>
              </Avatar>
            </Link>
          </Stack>
        </Grid>
        {/* Marquee */}
        <Grid item xs sx={{ backgroundColor: "#ffffff05", mt: 2 }}>
          <MyMarquee />
        </Grid>
        {/* Copyright */}
        <Grid
          item
          container
          sx={{ justifyContent: "center", padding: 2, bgcolor: "#424242" }}
        >
          <Typography
            color="lightgrey"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            © 2022 Nguyễn Phúc Hồ
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

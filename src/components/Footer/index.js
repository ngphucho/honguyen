import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Grid,
  Icon,
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

export default function Footer({ value: index, handleChange, tabInfo: menu }) {
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
        <Grid item xs>
          <Lottie options={defaultOtions} height={100} width={100} />
        </Grid>
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
                onClick={() => {
                  navigate(item.to);
                }}
                selected={item.index === index}
                disabled={item.index === index}
              >
                <ListItemText
                  sx={{ textTransform: "capitalize", color: "#fff" }}
                >
                  {item.label}
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid 
          item
          container
          xs
          sx={{ alignItems: "center", justifyContent: "center", padding: 2 }}
        >
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
        <Grid item container sx={{justifyContent:'center', padding:2, bgcolor:'#424242'}}>
          <Typography>Copyright</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

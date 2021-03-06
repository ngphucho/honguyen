import React from "react";
import { useNavigate } from "react-router-dom";
// import theme from "../../../components/UI/Theme";
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  CardActions,
  Fab,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import myPicture from "../../../assets/images/avatar.jpg";
import myAvatar from "../../../assets/images/file004511.png";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/styles";
import { scroller } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    "&.MuiGrid-root": {
      width: "100%",
      position: "sticky",
      top: 64,
      left: 0,
      height: "calc(100vh - 24px - 64px)",
      minHeight: 537,
      // overflowY: 'auto',
      [theme.breakpoints.down("sm")]: {
        position: "static",
        // overflowY: "unset",
        height: "auto",
      },
    },
  },
  avatar: {
    "&.MuiAvatar-root": {
      backgroundColor: theme.palette.common.bg2,
      width: 128,
      height: 128,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  listItemContainer: {
    "&.MuiListItem-root": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  listItemAvatarContainer: {
    "&.MuiListItemAvatar-root": {
      minWidth: 30,
    },
  },
  avatarContainer: {
    "&.MuiAvatar-root": {
      width: 24,
      height: 24,
    },
  },
  iconContainer: {
    "&.MuiSvgIcon-root": {
      fontSize: "1rem",
    },
  },
  listItemTextContainer: {
    "& .MuiTypography-root": {
      fontSize: "0.9rem",
    },
  },
  cardContainer: {
    "&.MuiCard-root": {
      position: "relative",
      overflow: "visible",
      padding: "30px 15px",
      marginBottom: "1.5rem",
    },
  },
  gridColumn: {
    "&.MuiGrid-root": {
      display: "flex",
      alignContent: "stretch",
    },
    "& .MuiCard-root": {
      width: "100%",
    },
  },
  cardTitle: {
    "&.MuiTypography-root": {
      fontSize: "1.2rem",
      fontWeight: 700,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: "#fff",
      // borderRadius: 5,
      display: "inline-block",
      position: "absolute",
      top: 0,
      left: 0,
      transform: "translate(10px, -50%)",
      whiteSpace: "nowrap",
    },
  },
  boxContainer: {
    borderLeftStyle: "dashed",
    borderLeftWidth: 1,
    borderLeftColor: theme.palette.common.light,
    padding: 20,
    marginBottom: 20,
    position: "relative",
    "&::before": {
      content: "''",
      display: "block",
      backgroundColor: "#bdbdbd",
      width: 10,
      height: 10,
      borderRadius: "50%",
      position: "absolute",
      top: 0,
      left: 0,
      transform: "translate(-50%, -50%)",
    },
  },
  boxContainerLine1: {
    "&.MuiTypography-root": {
      fontWeight: 600,
    },
  },
  boxContainerLine2: {
    "&.MuiTypography-root": {
      fontSize: "0.8rem",
    },
  },
}));

export default function AboutLeftColumn({ data, setValue, setIsSpy, setName }) {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>
        <img alt="myPicture" src={myPicture} width="100%"/>
      </div>
      {/* <Grid item className={classes.mainGrid}>
        <Card sx={{ backgroundColor: "transparent", boxShadow: 0 }}>
          <CardContent>
            <Grid container flexDirection={"column"}>
              <Grid item>
                <Avatar
                  className={classes.avatar}
                  alt="Ho Nguyen"
                  src={myAvatar}
                >
                  H
                </Avatar>
              </Grid>
              <Grid item>
                <Grid item>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: 20, margin: "10px auto 0 auto" }}
                    textAlign="center"
                  >
                    {data.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: 14 }}
                    textAlign="center"
                  >
                    {data.major}
                  </Typography>
                </Grid>
              </Grid>

  <List> */}
      {/* gioi tinh */}
      {/* <ListItem className={classes.listItemContainer}>
                  <ListItemAvatar className={classes.listItemAvatarContainer}>
                    <Avatar className={classes.avatarContainer}>
                      <AccountBoxIcon className={classes.iconContainer} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemTextContainer}>
                    {data.gender}
                  </ListItemText>
                </ListItem> */}
      {/* sinh nhat */}
      {/* <ListItem className={classes.listItemContainer}>
                  <ListItemAvatar className={classes.listItemAvatarContainer}>
                    <Avatar className={classes.avatarContainer}>
                      <CalendarTodayIcon className={classes.iconContainer} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemTextContainer}>
                    {data.birthday}
                  </ListItemText>
                </ListItem> */}
      {/* so dien thoai */}
      {/* <ListItem className={classes.listItemContainer}>
                  <ListItemAvatar className={classes.listItemAvatarContainer}>
                    <Avatar className={classes.avatarContainer}>
                      <PhoneIphoneIcon className={classes.iconContainer} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemTextContainer}>
                    {data.phoneNumber}
                  </ListItemText>
                </ListItem> */}
      {/* email */}
      {/* <ListItem className={classes.listItemContainer}>
                  <ListItemAvatar className={classes.listItemAvatarContainer}>
                    <Avatar className={classes.avatarContainer}>
                      <EmailIcon className={classes.iconContainer} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemTextContainer}>
                    {data.email}
                  </ListItemText>
                </ListItem> */}
      {/* dia chi */}
      {/* <ListItem className={classes.listItemContainer}>
                  <ListItemAvatar className={classes.listItemAvatarContainer}>
                    <Avatar className={classes.avatarContainer}>
                      <LocationOnIcon className={classes.iconContainer} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemTextContainer}>
                    {data.address}
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </CardContent>
          <CardActions>
            <Fab
              variant="extended"
              color="primary"
              sx={{ mx: "auto", minWidth: 120 }}
              onClick={() => {
                setValue(4); //contact page have index = 4
                setName("contact");
                setIsSpy(false);
                setTimeout(() => {
                  setIsSpy(true);
                }, 1000);
                scroller.scrollTo("contact", {
                  smooth: true,
                  duration: 600,
                  offset: -64,
                });
              }}
            >
              Contact
            </Fab>
          </CardActions>
        </Card>
      </Grid> */}
    </React.Fragment>
  );
}

import React from "react";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Cardaction from "@mui/material/CardActions";
import { deepOrange } from "@mui/material/colors";
import myAvatar from "../../assets/images/file004511.png";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeIcon from "@mui/icons-material/Code";
import MuiIcon from "../../assets/icons/material-ui-1.svg";
import BoostrapIcon from "../../assets/icons/bootstrap-icon.svg";
import ReactIcon from "../../assets/icons/react-2.svg";
import AngularIcon from "../../assets/icons/angular-icon.svg";
import {
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import AnimatedPage from "../../components/AnimatedPage";

const useStyles = makeStyles((theme) => ({
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
      borderRadius: 5,
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

export default function About() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
      <AnimatedPage>
        <div className="about">
          <Container>
            <Grid container spacing={3}>
              <Grid item container md={3} sm={5} className="profile-box-left">
                <Grid item sx={{ width: "100%" }}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container flexDirection={"column"}>
                        <Grid item>
                          <Avatar
                            className="profile-box__img"
                            sx={{
                              bgcolor: deepOrange[500],
                              width: 128,
                              height: 128,
                              mx: "auto",
                            }}
                            alt="Ho Nguyen"
                            src={myAvatar}
                          >
                            H
                          </Avatar>
                        </Grid>
                        <Grid item>
                          <Grid item>
                            <Typography variant="h5" textAlign="center">
                              Nguyễn Phúc Hồ
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h6" textAlign="center">
                              Lập trình viên Frontend
                            </Typography>
                          </Grid>
                        </Grid>

                        <List>
                          {/* gioi tinh */}
                          <ListItem className={classes.listItemContainer}>
                            <ListItemAvatar
                              className={classes.listItemAvatarContainer}
                            >
                              <Avatar className={classes.avatarContainer}>
                                <AccountBoxIcon
                                  className={classes.iconContainer}
                                />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              className={classes.listItemTextContainer}
                            >
                              Nam
                            </ListItemText>
                          </ListItem>
                          {/* sinh nhat */}
                          <ListItem className={classes.listItemContainer}>
                            <ListItemAvatar
                              className={classes.listItemAvatarContainer}
                            >
                              <Avatar className={classes.avatarContainer}>
                                <CalendarTodayIcon
                                  className={classes.iconContainer}
                                />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              className={classes.listItemTextContainer}
                            >
                              10-05-1991
                            </ListItemText>
                          </ListItem>
                          {/* so dien thoai */}
                          <ListItem className={classes.listItemContainer}>
                            <ListItemAvatar
                              className={classes.listItemAvatarContainer}
                            >
                              <Avatar className={classes.avatarContainer}>
                                <PhoneIphoneIcon
                                  className={classes.iconContainer}
                                />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              className={classes.listItemTextContainer}
                            >
                              0356 046 662
                            </ListItemText>
                          </ListItem>
                          {/* email */}
                          <ListItem className={classes.listItemContainer}>
                            <ListItemAvatar
                              className={classes.listItemAvatarContainer}
                            >
                              <Avatar className={classes.avatarContainer}>
                                <EmailIcon className={classes.iconContainer} />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              className={classes.listItemTextContainer}
                            >
                              ngphucho@gmail.com
                            </ListItemText>
                          </ListItem>
                          {/* dia chi */}
                          <ListItem className={classes.listItemContainer}>
                            <ListItemAvatar
                              className={classes.listItemAvatarContainer}
                            >
                              <Avatar className={classes.avatarContainer}>
                                <LocationOnIcon
                                  className={classes.iconContainer}
                                />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              className={classes.listItemTextContainer}
                            >
                              Biên Hòa - Đồng Nai
                            </ListItemText>
                          </ListItem>
                        </List>
                      </Grid>
                    </CardContent>
                    <Cardaction>
                      <Fab
                        variant="extended"
                        color="primary"
                        sx={{ mx: "auto" }}
                        onClick={() => {
                          navigate("/contact");
                        }}
                      >
                        Contact
                      </Fab>
                    </Cardaction>
                  </Card>
                </Grid>
              </Grid>
              <Grid item md={9} sm={7} className="profile-box-right">
                {/* gioi thieu */}
                <Card variant="outlined" className={classes.cardContainer}>
                  <Typography className={classes.cardTitle}>
                    Giới thiệu
                  </Typography>
                  <Typography sx={{ textAlign: "justify" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facilis sint tenetur cumque officiis quidem accusamus
                    laboriosam deleniti nihil perspiciatis totam ad possimus
                    obcaecati consequuntur ullam nesciunt architecto ex,
                    blanditiis aliquid dolorem a ratione quaerat? Voluptate
                    iure, non soluta rem voluptatum sint quo, voluptatibus
                    tempora eius doloribus eos ipsa quas accusamus?
                  </Typography>
                </Card>

                {/* muc tieu nghe nghiep */}
                <Card variant="outlined" className={classes.cardContainer}>
                  <Typography className={classes.cardTitle}>
                    Mục tiêu nghề nghiệp
                  </Typography>
                  <Typography sx={{ textAlign: "justify" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facilis sint tenetur cumque officiis quidem accusamus
                    laboriosam deleniti nihil perspiciatis totam ad possimus
                    obcaecati consequuntur ullam nesciunt architecto ex,
                    blanditiis aliquid dolorem a ratione quaerat? Voluptate
                    iure, non soluta rem voluptatum sint quo, voluptatibus
                    tempora eius doloribus eos ipsa quas accusamus?
                  </Typography>
                </Card>
                {/* hoc van */}
                <Card variant="outlined" className={classes.cardContainer}>
                  <Typography className={classes.cardTitle}>Học Vấn</Typography>
                  <Box className={classes.boxContainer}>
                    <Typography className={classes.boxContainerLine1}>
                      Dai Hoc Sai Gon
                    </Typography>
                    <Typography className={classes.boxContainerLine2}>
                      Ky su cong nghe thong tin
                    </Typography>
                  </Box>
                  <Box className={classes.boxContainer}>
                    <Typography className={classes.boxContainerLine1}>
                      Dai Hoc Sai Gon
                    </Typography>
                    <Typography className={classes.boxContainerLine2}>
                      Ky su cong nghe thong tin
                    </Typography>
                  </Box>
                </Card>

                {/* ky nang */}
                <Grid item container spacing={3}>
                  {/* ngon ngu lap trinh */}
                  <Grid className={classes.gridColumn} item xs={12} md={4}>
                    <Card variant="outlined" className={classes.cardContainer}>
                      <Typography className={classes.cardTitle}>
                        Ngôn ngữ lập trình
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <CodeIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="HTML" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <CodeIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="CSS" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <CodeIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="JavaScript" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <CodeIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="C#" />
                        </ListItem>
                      </List>
                    </Card>
                  </Grid>
                  {/* frame work */}
                  <Grid className={classes.gridColumn} item xs={12} md={4}>
                    <Card variant="outlined" className={classes.cardContainer}>
                      <Typography className={classes.cardTitle}>
                        Frame Work
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar variant="square">
                              {/* <BallotIcon /> */}
                              <Icon sx={{ textAlign: "center" }}>
                                <img
                                  src={BoostrapIcon}
                                  style={{ height: "100%" }}
                                />
                              </Icon>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Bootstrap" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar variant="square">
                              {/* <MuiIcon /> */}
                              {/* <SvgIcon component={MuiIcon} /> */}
                              <Icon sx={{ textAlign: "center" }}>
                                <img src={MuiIcon} style={{ height: "100%" }} />
                              </Icon>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Meterial UI" />
                        </ListItem>
                      </List>
                    </Card>
                  </Grid>
                  {/* frame work 2*/}
                  <Grid className={classes.gridColumn} item xs={12} md={4}>
                    <Card variant="outlined" className={classes.cardContainer}>
                      <Typography className={classes.cardTitle}>
                        Frame Work
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar variant="square">
                              <Icon sx={{ textAlign: "center" }}>
                                <img
                                  src={ReactIcon}
                                  style={{ height: "100%" }}
                                />
                              </Icon>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="ReactJS" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar variant="square">
                              <Icon sx={{ textAlign: "center" }}>
                                <img
                                  src={AngularIcon}
                                  style={{ height: "100%" }}
                                />
                              </Icon>
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Angular" />
                        </ListItem>
                      </List>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </AnimatedPage>
  );
}

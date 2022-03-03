import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Icon,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MuiIcon from "../../../assets/icons/material-ui-1.svg";
import BoostrapIcon from "../../../assets/icons/bootstrap-icon.svg";
import ReactIcon from "../../../assets/icons/react-2.svg";
import AngularIcon from "../../../assets/icons/angular-icon.svg";

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
    paddingTop: 20,
    display: "flex",
    alignContent: "stretch",
    width: "100%",
  },
  card: {
    "&.MuiCard-root": {
      position: "relative",
      overflow: "visible",
      padding: "30px 15px",
      border: 0,
      width: "100%",
      backgroundColor: theme.palette.common.bg1,
    },
  },
  gridColumn: {
    "&.MuiGrid-root": {
      display: "flex",
      alignContent: "stretch",
      overflow: "hidden",
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
      backgroundColor: theme.palette.common.bg2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
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
    borderLeftColor: theme.palette.common.bg2,
    padding: 20,
    marginBottom: 20,
    position: "relative",
    "&::before": {
      content: "''",
      display: "block",
      backgroundColor: theme.palette.common.bg2,
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
  row: {
    ...theme.palette.common.row,
  },
}));

export default function AboutRightColumn() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* gioi thieu */}
      <div className={classes.row}>
        <div className={classes.cardContainer}>
          <Card variant="outlined" className={classes.card}>
            <Typography className={classes.cardTitle}>Giới thiệu</Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              sint tenetur cumque officiis quidem accusamus laboriosam deleniti
              nihil perspiciatis totam ad possimus obcaecati consequuntur ullam
              nesciunt architecto ex, blanditiis aliquid dolorem a ratione
              quaerat? Voluptate iure, non soluta rem voluptatum sint quo,
              voluptatibus tempora eius doloribus eos ipsa quas accusamus?
            </Typography>
          </Card>
        </div>
      </div>

      {/* muc tieu nghe nghiep */}
      <div className={classes.row}>
        <div className={classes.cardContainer}>
          <Card variant="outlined" className={classes.card}>
            <Typography className={classes.cardTitle}>
              Mục tiêu nghề nghiệp
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              sint tenetur cumque officiis quidem accusamus laboriosam deleniti
              nihil perspiciatis totam ad possimus obcaecati consequuntur ullam
              nesciunt architecto ex, blanditiis aliquid dolorem a ratione
              quaerat? Voluptate iure, non soluta rem voluptatum sint quo,
              voluptatibus tempora eius doloribus eos ipsa quas accusamus?
            </Typography>
          </Card>
        </div>
      </div>

      {/* hoc van */}
      <div className={classes.row}>
        <div className={classes.cardContainer}>
          <Card variant="outlined" className={classes.card}>
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
        </div>
      </div>

      {/* ky nang */}
      <div className={classes.row}>
        <Grid item container spacing={3}>
          {/* ngon ngu lap trinh */}
          <Grid className={classes.gridColumn} item xs={12} md={4}>
            <div className={classes.cardContainer}>
              <Card variant="outlined" className={classes.card}>
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
            </div>
          </Grid>
          {/* frame work */}
          <Grid className={classes.gridColumn} item xs={12} md={4}>
            <div className={classes.cardContainer}>
              <Card variant="outlined" className={classes.card}>
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
                            alt="icon"
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
                          <img
                            alt="icon"
                            src={MuiIcon}
                            style={{ height: "100%" }}
                          />
                        </Icon>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Meterial UI" />
                  </ListItem>
                </List>
              </Card>
            </div>
          </Grid>
          {/* frame work 2*/}
          <Grid className={classes.gridColumn} item xs={12} md={4}>
            <div className={classes.cardContainer}>
              <Card variant="outlined" className={classes.card}>
                <Typography className={classes.cardTitle}>
                  Frame Work
                </Typography>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar variant="square">
                        <Icon sx={{ textAlign: "center" }}>
                          <img
                            alt="icon"
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
                            alt="icon"
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
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

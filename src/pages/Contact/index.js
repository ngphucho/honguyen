import React, { useEffect, useState } from "react";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import ContactForm from "../../components/ContactForm";
import AnimatedPage from "../../components/AnimatedPage";
// import { contactData } from "../../assets/Data/contactData";
import contactAPI from "../../services/contactAPI";
import Loading from '../../components/Loading'

const useStyles = makeStyles((theme) => ({
  contact: {
    minHeight: "calc(100vh - 64px - 3rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainGrid: {
    backgroundColor: theme.palette.common.bg1,
    backgroundClip: "content-box",
    padding: "0 200px",
  },
  formGroup: {
    "&.MuiFormGroup-root": {
      paddingBottom: 10,
    },
  },
  leftColumn: {
    boxSizing: "border-box",
    padding: 20,
    backgroundColor: "#252525",
    margin: "40px 50px 40px -50px",
    height: "calc(100% - 80px)",
    [theme.breakpoints.down("md")]: {
      marginRight: 30,
      marginLeft: -30,
    },
    [theme.breakpoints.down("sm")]: {
      margin: 40,
    },
  },
  rightColumn: {
    "&.MuiGrid-root": {
      padding: "60px 40px",
      [theme.breakpoints.down("sm")]: {
        padding: "0px 40px 40px 40px",
      },
    },
  },
  listItemIcon: {
    "&.MuiListItemIcon-root": {
      minWidth: 40,
      [theme.breakpoints.down("sm")]: {
        minWidth: 20,
      },
    },
  },
  itemText: {
    color: theme.palette.common.textColor1,
    "& .MuiTypography-root": {
      fontSize: "0.9rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "0.7rem",
      },
    },
    "&.MuiSvgIcon-root": {
      width: "0.9rem",
      height: "0.9rem",
    },
    "&.MuiLink-root": {
      color: "inherit",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const matchLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchSM = useMediaQuery(theme.breakpoints.up("sm"));
  const [contactData, setContactData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    contactAPI
      .getContact()
      .then((res) => {
        setContactData(res.data[0]);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <AnimatedPage>
        <div className={classes.contact}>
          {/* <Container> */}
          <Grid
            px={matchLG ? "200px" : matchMD ? "100px" : matchSM ? "50px" : 0}
            container
            className={classes.mainGrid}
          >
            {/* Left Column */}
            <Grid item sm={5} xs={12}>
              <div className={classes.leftColumn}>
                <Typography
                  textAlign={!matchSM ? "center" : "left"}
                  variant="h5"
                  color="#bdbdbd"
                >
                  Contact Me
                </Typography>
                <List>
                  <ListItem disableGutters={!matchMD}>
                    <ListItemIcon className={classes.listItemIcon}>
                      <LocationOnIcon className={classes.itemText} />
                    </ListItemIcon>
                    <ListItemText className={classes.itemText}>
                      {contactData.address}
                    </ListItemText>
                  </ListItem>

                  <ListItem disableGutters={!matchMD}>
                    <ListItemIcon className={classes.listItemIcon}>
                      <EmailIcon className={classes.itemText} />
                    </ListItemIcon>
                    <ListItemText className={classes.itemText}>
                      <Link
                        className={classes.itemText}
                        href={`mailto:${contactData.email}`}
                      >
                        {contactData.email}
                      </Link>
                    </ListItemText>
                  </ListItem>

                  <ListItem disableGutters={!matchMD}>
                    <ListItemIcon className={classes.listItemIcon}>
                      <PhoneIphoneIcon className={classes.itemText} />
                    </ListItemIcon>
                    <ListItemText className={classes.itemText}>
                      <Link
                        className={classes.itemText}
                        href={`tel:${contactData.phoneNumber}`}
                      >
                        {contactData.phoneNumber}
                      </Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </div>
            </Grid>
            {/* Right column */}
            <Grid item sm={7} xs={12} className={classes.rightColumn}>
              <ContactForm />
            </Grid>
          </Grid>
          {/* </Container> */}
        </div>
      </AnimatedPage>
    );
  }
}

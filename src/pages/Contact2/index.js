import React, { useEffect, useState } from "react";
import {
  Container,
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
import ContactForm2 from "../../components/ContactForm2";
import AnimatedPage from "../../components/AnimatedPage";
// import { contactData } from "../../assets/Data/contactData";
import contactAPI from "../../services/contactAPI";
import Underline from "../../components/Underline";
import ContactInfo from "../../components/ContactInfo";

const useStyles = makeStyles((theme) => ({
  contact: {
    minHeight: theme.palette.common.pageMinHight,
    paddingTop: theme.palette.common.pagePaddingTop,
    paddingBottom: theme.palette.common.pagePaddingBottom,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // boxSizing: "border-box",
  },
  sectionTitle: {
    ...theme.palette.common.sectionTitle,
  },
  mainGrid: {
    backgroundColor: theme.palette.common.colorBGVariant,
    borderRadius: 5,
    "&.MuiGrid-root": {
      padding: "60px 20px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: 40,
        paddingBottom: 40,
      },
    },
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
    // "&.MuiGrid-root": {
    //   padding: "60px 0px",
    //   [theme.breakpoints.down("sm")]: {
    //     padding: "40px 0px 40px 0px",
    //   },
    // },
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

export default function Contact2() {
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
    return <div />;
  } else {
    return (
      <div className="page">
        <Container id="contact">
          <div className={classes.contact}>
            <Typography className={classes.sectionTitle} variant="h1">
              Contact Me
            </Typography>
            <Underline />
            <Grid
              // px={matchLG ? "200px" : matchMD ? "100px" : matchSM ? "50px" : 0}
              container
              className={classes.mainGrid}
            >
              {/* Left Column */}
              <Grid
                item
                container
                sx={{
                  justifyContent: { xs: "center", sm: "flex-start" },
                  alignItems: "center",
                  mb: { xs: "20px", sm: 0 },
                }}
                md={5}
                sm={6}
                xs={12}
              >
                <ContactInfo data={contactData} />
              </Grid>
              {/* Right column */}
              <Grid item md={7} sm={6} xs={12} className={classes.rightColumn}>
                <ContactForm2 />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

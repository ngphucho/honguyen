import React from "react";
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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  listItem: {
    border: `1px solid ${theme.palette.common.colorBG}`,
    borderRadius: 5,
    maxWidth: 300,
    "&:not(:last-child)": {
      marginBottom: 20,
    },
    "&:hover": {
      backgroundColor: theme.palette.common.colorBG,
    }
  },
  link: {
    "&.MuiLink-root": {
      color: "#ffffff",
      textDecoration: "none",
    },
    "&:not(:last-child)": {
      marginBottom: 20,
    },
  },
}));
export default function ContactInfo({ data: contactData }) {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.list}>
        <Link
          className={classes.link}
          href="https://goo.gl/maps/PbbypWvm4cQZPJJM8"
          target="_blank"
        >
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText>
              {/* {contactData.address} */}
              Biên Hòa, Đồng Nai
            </ListItemText>
          </ListItem>
        </Link>

        <Link className={classes.link} href={`mailto:${contactData.email}`}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>{contactData.email}</ListItemText>
          </ListItem>
        </Link>

        <Link className={classes.link} href={`tel:${contactData.phoneNumber}`}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <PhoneIphoneIcon />
            </ListItemIcon>
            <ListItemText>{contactData.phoneNumber}</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

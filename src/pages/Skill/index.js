import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Underline from "../../components/Underline";
import Theme from "../../components/UI/Theme";
import aboutAPI from "../../services/aboutAPI";

const useStyles = makeStyles((theme) => ({
  skill: {
    minHeight: theme.palette.common.pageMinHight,
    paddingTop: theme.palette.common.pagePaddingTop,
    paddingBottom: theme.palette.common.pagePaddingBottom,
    // boxSizing: "border-box",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },
  sectionTitle: {
    ...theme.palette.common.sectionTitle,
  },
  card: {
    "&.MuiCard-root": {
      backgroundColor: theme.palette.common.colorBGVariant,
      borderRadius: "20px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "20px",
      // maxWidth: "320px",
      // minWidth: "300px",
      "&:hover": {
        backgroundColor: "transparent",
        boxShadow: "none",
        border: `1px solid ${theme.palette.common.colorBGVariant}`,
      },
    },
  },
  list: {
    "&.MuiList-root": {
      padding: "10px 20px",
    },
  },
  listItemText: {
    "&.MuiListItemText-root": {
      color: theme.palette.common.colorLight,
      "& .MuiListItemText-primary": {
        fontSize: "0.9rem",
        fontWeight: 600,
      },
    },
  },
}));

export default function Skill() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [skillData, setSkillData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    aboutAPI
      .getAbout()
      .then((res) => {
        setSkillData(res.data[0].skill);
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
        <Container id="skill">
          <div className={classes.skill}>
            <Typography className={classes.sectionTitle} variant="h1">
              My skill
            </Typography>
            <Underline />
            <Grid container columnSpacing={10} rowSpacing={{ xs: 3, sm: 10 }}>
              {skillData.map((skill, i) => (
                <Grid key={i} item xs={12} sm={6} lg={4} display="inline-grid">
                  <Card className={classes.card}>
                    <Typography
                      variant="h2"
                      color={Theme.palette.common.colorPrimary}
                    >
                      {skill.title}
                    </Typography>
                    <List className={classes.list}>
                      {skill.item.map((subSkill, j) => (
                        <ListItem key={j}>
                          <ListItemIcon>
                            <Icon>verified</Icon>
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listItemText}
                            primary={subSkill.name}
                            secondary={subSkill.level}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

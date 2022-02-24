import React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import SwipeableViews from "react-swipeable-views";
import { Grid, Button, Typography } from "@mui/material";
import TabPanel from "../TabPanle";
import MyCarousel from "../MyCarousel";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  detailColumn: {
    "&.MuiGrid-root": {
      border: "1px solid #000",
      flexDirection: "column",
      padding: 5,
    },
  },
  detailContainer: {
    "&.MuiGrid-root": {
      flex: 9,
      // backgroundColor: "Background",
    },
  },
  tabContainter: {
    "&.MuiGrid-root": {
      flex: 1,
      display: "flex",
      justifyContent: "space-around",
      // backgroundColor: alpha(theme.palette.common.light, 0.1),
      "& .MuiButton-root": {
        minWidth: 100,
      },
    },
  },
  imageColumn: {
    "&.MuiGrid-root": {
      border: "1px solid #000",
    },
  },
}));

export default function Product({ project, i }) {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setValue(value === 0 ? 1 : 0);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Grid item container className={classes.rowContainer}>
      {/* left column */}
      <Grid
        order={i % 2}
        item
        container
        xs={5}
        className={classes.detailColumn}
      >
        <Grid item className={classes.detailContainer}>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0}>
              <Typography variant="h6">{project.projectName}</Typography>
              <Typography variant="caption">{project.year}</Typography>
              <Typography style={{ textAlign: "justify" }}>
                {project.description}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              {project.techniques.map((item, i) => (
                <div key={i}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography>{item.content}</Typography>
                </div>
              ))}
            </TabPanel>
          </SwipeableViews>
        </Grid>
        <Grid item className={classes.tabContainter}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={handleClick}
          >
            {value === 0 ? "Chi tiết" : "Mô tả"}
          </Button>
          <Button variant="outlined" href={project.path} target="_blank">
            View
          </Button>
        </Grid>
      </Grid>
      {/* right column */}
      <Grid item xs={7} className={classes.imageColumn}>
        <MyCarousel items={project.carousel} />
      </Grid>
    </Grid>
  );
}

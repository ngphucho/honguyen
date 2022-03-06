import React from "react";
// import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Typography, Box } from "@mui/material";
import MyCarousel from "../MyCarousel";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  mainGrid: {},
  detailColumn: {
    "&.MuiGrid-root": {
      flexDirection: "column",
    },
  },
  detailContainer: {
    "&.MuiGrid-root": {
      // flex: 9,
      height: "calc(35vw - 40px - 50px)",
      padding: "0 20px",
      marginTop: 20,
      marginBottom: 20,
      boxSizing: "border-box",
      overflowY: "auto",
      "&::-webkit-scrollbar, &::-webkit-scrollbar-thumb": {
        width: 26,
        backgroundClip: "padding-box",
        border: "10px solid transparent",
      },

      "&::-webkit-scrollbar-thumb": {
        boxShadow: "inset 0 0 0 10px #bdbdbd",
      },
      [theme.breakpoints.down("sm")]: {
        height: "calc(40vw - 50px)",
      },
    },
  },

  detailContainer2: {
    "&.MuiGrid-root": {
      "&::-webkit-scrollbar-thumb": {
        boxShadow: "inset 0 0 0 10px #e0e0e0",
      },
    },
  },
  tabContainter: {
    "&.MuiGrid-root": {
      height: 50,
      // flex: 1,
      display: "flex",
      // justifyContent: "space-around",
      padding: 20,
      paddingTop: 0,
      alignItems: "center",
      "& .MuiButton-root": {
        minWidth: 100,
      },
    },
  },
  imageColumn: {
    "&.MuiGrid-root": {
      // padding: 10,
      // border: "1px solid #000",
      // backgroundColor: theme.palette.common.bg2,
    },
  },
  row: {
    ...theme.palette.common.row,
    width: "100%",
    backgroundColor: theme.palette.common.bg1,
    "&:nth-child(even)": {
      backgroundColor: theme.palette.common.bg2,
    },
  },
}));

export default function Product({ project, i }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className={classes.row}>
      <Grid item container className={classes.mainGrid}>
        {/* left column */}
        <Grid
          order={matchSM ? i % 2 : 1}
          item
          container
          sm={6}
          xs={12}
          className={classes.detailColumn}
        >
          <Grid
            item
            className={
              `${classes.detailContainer} ` +
              (i % 2 === 1 ? `${classes.detailContainer2}` : "")
            }
          >
            <Box textAlign={i % 2 ? "right" : "left"} sx={{ fontSize: "1rem" }}>
              <Typography fontSize="1.3em" variant="h5">
                {project.projectName}
              </Typography>
              <Typography fontSize="0.8em" variant="caption">
                {project.year}
              </Typography>
              <Typography fontSize="1em" style={{ textAlign: "justify" }}>
                {project.description}
              </Typography>
              <Box
                style={{
                  marginTop: 10,
                }}
              >
                {project.techniques.map((item, i) => (
                  <div key={i}>
                    <Typography fontSize="1.1em" variant="h6">
                      {item.title}
                    </Typography>
                    <Typography fontSize="0.9em">{item.content}</Typography>
                  </div>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            justifyContent={i % 2 ? "flex-end" : "flex-start"}
            className={classes.tabContainter}
          >
            <Button
              sx={{ height: 30 }}
              variant="outlined"
              href={project.path}
              target="_blank"
            >
              View
            </Button>
          </Grid>
        </Grid>
        {/* right column */}
        <Grid item sm={6} xs={12} className={classes.imageColumn}>
          <MyCarousel items={project.carousel} index={i} />
        </Grid>
      </Grid>
    </div>
  );
}

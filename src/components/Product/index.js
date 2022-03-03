import React from "react";
// import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button, Typography, Box } from "@mui/material";
import MyCarousel from "../MyCarousel";

const useStyles = makeStyles((theme) => ({
  // "@global": {
  //   "&::-webkit-scrollbar": {
  //     width: "0.4em",
  //   },
  //   "&::-webkit-scrollbar-track": {
  //     boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  //     webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  //   },
  //   "&::-webkit-scrollbar-thumb": {
  //     backgroundColor: "rgba(0,0,0,.1)",
  //     outline: "1px solid slategrey",
  //   },
  // },
  mainGrid: {},
  detailColumn: {
    "&.MuiGrid-root": {
      // border: "1px solid #000",
      flexDirection: "column",
      // padding: 30,
      // backgroundClip: 'content-box',
      // backgroundColor: theme.palette.common.bg2,
    },
  },
  detailContainer: {
    "&.MuiGrid-root": {
      // flex: 9,
      height: 400,
      padding: 20,
      boxSizing: "border-box",
      overflowY: "auto",
      "&::-webkit-scrollbar, &::-webkit-scrollbar-thumb": {
        width: 26,
        // borderRadius: 13,
        backgroundClip: "padding-box",
        border: "10px solid transparent",
      },

      "&::-webkit-scrollbar-thumb": {
        boxShadow: "inset 0 0 0 10px #bdbdbd",
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
      paddingTop:0,
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
  // const [value, setValue] = useState(0);
  const classes = useStyles();
  return (
    <div className={classes.row}>
      <Grid item container className={classes.mainGrid}>
        {/* left column */}
        <Grid
          order={i % 2}
          item
          container
          xs={6}
          className={classes.detailColumn}
        >
          <Grid
            item
            className={
              `${classes.detailContainer} ` +
              (i % 2 === 1 ? `${classes.detailContainer2}` : "")
            }
          >
            <Box
              textAlign={i % 2 ? "right" : "left"}
              // style={{ height: 300, overflowY: "auto" }}
            >
              <Typography variant="h5">{project.projectName}</Typography>
              <Typography variant="caption">{project.year}</Typography>
              <Typography style={{ textAlign: "justify" }}>
                {project.description}
              </Typography>
              <Box
                style={{
                  marginTop: 10,
                  // padding: "0 20px",
                }}
              >
                {project.techniques.map((item, i) => (
                  <div key={i}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.content}</Typography>
                  </div>
                ))}
                {/* {project.techniques.map((item, i) => (
                  <div key={i}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.content}</Typography>
                  </div>
                ))}
                {project.techniques.map((item, i) => (
                  <div key={i}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.content}</Typography>
                  </div>
                ))} */}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            justifyContent={i % 2 ? "flex-end" : "flex-start"}
            className={classes.tabContainter}
          >
            <Button sx={{height: 30}} variant="outlined" href={project.path} target="_blank">
              View
            </Button>
          </Grid>
        </Grid>
        {/* right column */}
        <Grid item xs={6} className={classes.imageColumn}>
          <MyCarousel items={project.carousel} index={i} />
        </Grid>
      </Grid>
    </div>
  );
}

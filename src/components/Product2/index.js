import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import React from "react";
import Theme from "../UI/Theme";
import { makeStyles } from "@mui/styles";
import MyCarousel2 from "../MyCarousel2";

const useStyles = makeStyles((theme) => ({
  card: {
    "&.MuiCard-root": {
      padding: 20,
      borderRadius: 20,
      backgroundColor: "transparent",
      width: "100%",
      borderColor: theme.palette.common.colorBGVariant,
      "&:hover": {
        backgroundColor: theme.palette.common.colorBGVariant,
      },
    },
  },
}));

export default function Product2({ project, i }) {
  const classes = useStyles();
  return (
    <Grid item container xs={12} sm={6} lg={4}>
      <Card variant="outlined" className={classes.card}>
        <MyCarousel2 sx={{ height: 300, borderRadius: "20px" }} items={project.carousel} index={i} />
        <CardContent sx={{ px: 0, color: Theme.palette.common.colorWhite }}>
          {project.projectName}
        </CardContent>
        <CardActions sx={{ px: 0 }}>
          <Button
            sx={{
              borderColor: Theme.palette.common.colorPrimary,
              color: Theme.palette.common.colorPrimary,
              "&:hover": {
                borderColor: Theme.palette.common.colorWhite,
                backgroundColor: Theme.palette.common.colorWhite,
                color: Theme.palette.common.colorBG,
              },
            }}
            variant="outlined"
            size="small"
          >
            Github
          </Button>
          <Button
            sx={{
              backgroundColor: Theme.palette.common.colorPrimary,
              color: Theme.palette.common.colorBG,
            }}
            variant="outlined"
            size="small"
          >
            Demo
          </Button>
        </CardActions>
        {/* {console.log(project)} */}
      </Card>
    </Grid>
  );
}

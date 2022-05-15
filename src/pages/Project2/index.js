import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Projects } from "../../assets/Data/projectData";
import Product2 from "../../components/Product2";
import AnimatedPage from "../../components/AnimatedPage";
import projectAPI from "../../services/projectAPI";
import Loading from "../../components/Loading";
import Underline from "../../components/Underline";

const useStyles = makeStyles((theme) => ({
  project: {
    minHeight: theme.palette.common.pageMinHight,
    paddingTop: theme.palette.common.pagePaddingTop,
    paddingBottom: theme.palette.common.pagePaddingBottom,
  },
  sectionTitle: {
    ...theme.palette.common.sectionTitle,
  },
}));

export default function Project2() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    projectAPI
      .getProject()
      .then((res) => {
        setProjectData(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return <div>Error:{error.message}</div>;
  } else if (!isLoaded) {
    return <div />;
  } else {
    return (
      <div className="page">
        <Container id="project">
          <div className={classes.project}>
            <Typography className={classes.sectionTitle} variant="h1">
              My Project
            </Typography>
            <Underline />
            <Grid container columnSpacing={10} rowSpacing={{ xs: 3, sm: 10 }}>
              {projectData.map((project, i) => (
                <Product2 key={i} project={project} i={i} />
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Projects } from "../../assets/Data/projectData";
import Product from "../../components/Product";
import AnimatedPage from "../../components/AnimatedPage";
import projectAPI from "../../services/projectAPI";
import Loading from "../../components/Loading";

const useStyles = makeStyles((theme) => ({
  project: {
    minHeight: theme.palette.common.pageMinHight,
    paddingTop: theme.palette.common.pagePaddingTop,
    paddingBottom: theme.palette.common.pagePaddingBottom,
  },
}));

export default function Project() {
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
      <AnimatedPage>
        <Container id="project">
          <div className={classes.project}>
            <Grid container>
              {projectData.map((project, i) => (
                <Product key={i} project={project} i={i} />
              ))}
            </Grid>
          </div>
        </Container>
      </AnimatedPage></div>
    );
  }
}

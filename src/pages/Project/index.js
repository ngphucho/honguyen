import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Projects } from "../../assets/Data/projectData";
import Product from "../../components/Product";
import AnimatedPage from "../../components/AnimatedPage";
import projectAPI from "../../services/projectAPI";
import Loading from "../../components/Loading";

export default function Project() {
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
    return <Loading />;
  } else {
    return (
      <AnimatedPage>
        <div className="project">
          {/* <Container> */}
          <Grid container>
            {projectData.map((project, i) => (
              <Product key={i} project={project} i={i} />
            ))}
          </Grid>
          {/* </Container> */}
        </div>
      </AnimatedPage>
    );
  }
}

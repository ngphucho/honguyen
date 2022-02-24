import React from "react";
import { Container, Grid } from "@mui/material";
import { Projects } from "../../assets/Data/projectData";
import Product from "../../components/Product";
import AnimatedPage from "../../components/AnimatedPage";

export default function Project() {
  return (
    <AnimatedPage>
      <div className="project">
        <Container>
          <Grid container rowSpacing={1}>
            {Projects.map((project, i) => (
              <Product key={i} project={project} i={i} />
            ))}
          </Grid>
        </Container>
      </div>
    </AnimatedPage>
  );
}

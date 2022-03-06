import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import AboutLeftColumn from "./AboutLeftColumn";
import AboutRightColumn from "./AboutRightColumn";
import Grid from "@mui/material/Grid";
// import { aboutData } from "../../assets/Data/aboutData";
import AnimatedPage from "../../components/AnimatedPage";
import aboutAPI from "../../services/aboutAPI";
import Loading from "../../components/Loading";

const useStyles = makeStyles((theme) => ({
  leftColumn: {
    "&.MuiGrid-root": {
      backgroundColor: theme.palette.common.bg1,
      backgroundClip: "content-box",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [aboutData, setAboutData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    aboutAPI
      .getAbout()
      .then((res) => {
        setAboutData(res.data[0]);
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
    return <Loading />;
  } else {
    return (
      <AnimatedPage>
        <div className="about">
          <Grid container spacing={3}>
            {/* Left column */}
            <Grid item container md={3} sm={5} className={classes.leftColumn}>
              <AboutLeftColumn data={aboutData} />
            </Grid>

            {/* Right column */}
            <Grid item md={9} sm={7} className="profile-box-right">
              <AboutRightColumn data={aboutData} />
            </Grid>
          </Grid>
        </div>
      </AnimatedPage>
    );
  }
}

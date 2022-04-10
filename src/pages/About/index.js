import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import AboutLeftColumn from "./AboutLeftColumn";
import AboutRightColumn from "./AboutRightColumn";
import Grid from "@mui/material/Grid";
// import { aboutData } from "../../assets/Data/aboutData";
import AnimatedPage from "../../components/AnimatedPage";
import aboutAPI from "../../services/aboutAPI";
import Loading from "../../components/Loading";
import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  about: {
    minHeight: theme.palette.common.pageMinHight,
    paddingTop: theme.palette.common.pagePaddingTop,
    paddingBottom: theme.palette.common.pagePaddingBottom,
  },
  leftColumn: {
    "&.MuiGrid-root": {
      backgroundColor: theme.palette.common.bg1,
      backgroundClip: "content-box",
    },
  },
}));

export default function About({ setValue, setIsSpy, setName }) {
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
    return <div />;
  } else {
    return (
      <div className="page">
        <AnimatedPage>
          <Container id="about">
            <div className={classes.about}>
              <Grid container spacing={3}>
                {/* Left column */}
                <Grid
                  item
                  container
                  md={3}
                  sm={5}
                  className={classes.leftColumn}
                >
                  <AboutLeftColumn
                    data={aboutData}
                    setValue={setValue}
                    setIsSpy={setIsSpy}
                    setName={setName}
                  />
                </Grid>

                {/* Right column */}
                <Grid item md={9} sm={7} className="profile-box-right">
                  <AboutRightColumn data={aboutData} />
                </Grid>
              </Grid>
            </div>
          </Container>
        </AnimatedPage>
      </div>
    );
  }
}

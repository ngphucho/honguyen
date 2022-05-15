import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
// import { aboutData } from "../../assets/Data/aboutData";
import aboutAPI from "../../services/aboutAPI";
import { Card, Container, Typography, Fab, Stack } from "@mui/material";
import Underline from "../../components/Underline";
import avatar2 from "../../assets/images/avatar2.jpg";
import { scroller } from "react-scroll";
import Theme from "../../components/UI/Theme";
import downloadFile from "../../services/downloadFile";

const scrollOffset = 0;
const scrollDuration = 2000;

const useStyles = makeStyles((theme) => ({
  about: {
    minHeight: theme.palette.common.pageMinHight,
    // height: "100vh",
    paddingTop: theme.palette.common.pagePaddingTop,
    paddingBottom: theme.palette.common.pagePaddingBottom,
    // backgroundColor: "#003e00",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    ...theme.palette.common.sectionTitle,
  },
  content: {
    "&.MuiGrid-root": {
      backgroundColor: theme.palette.common.colorWhite,
    },
  },
  leftColumn: {
    "&.MuiGrid-root": {
      backgroundColor: theme.palette.common.bg1,
      backgroundClip: "content-box",
    },
  },
  fab: {
    "&.MuiFab-root": {
      minWidth: 150,
    },
  },
}));

export default function About({ inViewport }) {
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

  const myScrollTo = (des) => {
    scroller.scrollTo(des, {
      smooth: true,
      duration: scrollDuration,
      offset: scrollOffset,
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div />;
  } else {
    return (
      <div className="page">
        <Container id="about">
          <div className={classes.about}>
            <Typography className={classes.sectionTitle} variant="h1">
              About me
            </Typography>
            <Underline />
            <Card
              sx={{
                flexGrow: 1,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                backgroundColor: Theme.palette.common.colorBGVariant,
              }}
            >
              <Grid container spacing="20px" p="20px">
                <Grid
                  item
                  container
                  alignSelf="stretch"
                  direction="column"
                  alignItems={{ xs: "center", sm: "flex-start" }}
                  justifyContent="center"
                  xs={12}
                  sm={3}
                >
                  <img
                    alt="avatar 2"
                    src={avatar2}
                    style={{
                      width: "100%",
                      maxWidth: "150px",
                      display: "block",
                      borderRadius: 5,
                      transition: "all 1s",
                      height: !inViewport ? "auto" : "0px",
                      opacity: !inViewport ? 1 : 0,
                      transform: !inViewport
                        ? "translateY(0)"
                        : "translateY(-20px)",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography
                    sx={{ textAlign: "justify" }}
                    color={Theme.palette.common.colorLight}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque aliquid libero ea praesentium adipisci explicabo quam
                    repellat error harum tempore, dolores maxime, asperiores
                    illo maiores. Itaque, neque possimus maxime amet voluptate
                    nam ducimus sit saepe. Corporis assumenda animi dolore culpa
                    ipsa aut eos, consequuntur aspernatur excepturi tenetur odio
                    harum vitae rerum temporibus, labore voluptatibus commodi
                    expedita sint nihil. Quos veritatis voluptatem ex dolorum
                    animi sunt iusto autem numquam sequi nulla asperiores cumque
                    nesciunt, eum itaque optio? Facilis error reprehenderit
                    minima numquam expedita at quia fugiat tempora, nam ratione
                    odio itaque voluptas voluptatum veniam dolor obcaecati?
                    Numquam deleniti tenetur tempora quo?
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent={{ xs: "center", sm: "flex-start" }}
                    mt="20px"
                    spacing="20px"
                  >
                    <Fab
                      variant="extended"
                      className={classes.fab}
                      sx={{
                        backgroundColor: Theme.palette.common.colorPrimary,
                        color: Theme.palette.common.colorBG,
                      }}
                      onClick={() => {
                        myScrollTo("contact");
                      }}
                    >
                      Contact
                    </Fab>
                    <Fab
                      variant="extended"
                      className={classes.fab}
                      sx={{
                        backgroundColor: Theme.palette.common.colorLight,
                        color: Theme.palette.common.colorBG,
                      }}
                      onClick={() => {
                        downloadFile(
                          "https://i.postimg.cc/QMMZkcz6/booking-movie-film-detail.png",
                          "myCV.png"
                        );
                      }}
                    >
                      Get CV
                    </Fab>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

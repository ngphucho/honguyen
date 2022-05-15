import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import background from "../../assets/images/bg.png";
import { useIntersection } from "../../hooks/useIntersection";

import Footer from "../../components/Footer";
// import { menu as tabInfo } from "../../assets/Data/menu";
import { makeStyles } from "@mui/styles";
import menuAPI from "../../services/menuAPI";
import Loading from "../../components/Loading";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact2 from "../../pages/Contact2";
import Project2 from "../../pages/Project2";
import Skill from "../../pages/Skill";
import Navbar from "../../components/Navbar";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.5em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#9e9e9e",
      // outline: "1px solid slategrey",
    },
  },

  mainBody: {
    minHeight: "100vh",
    // padding: "1.5rem 0",
    backgroundColor: "#1f1f38",
    backgroundImage: `url(${background})`,
    fontFamily: "'Poppins', sans-serif",
    color: theme.palette.common.colorWhite,
  },
}));

export default function AppLayout() {
  const classes = useStyles();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tabInfo, setTabInfo] = useState([]);
  const [value, setValue] = useState(0);
  const [isSpy, setIsSpy] = useState(true);
  const [name, setName] = useState("");
  const myRef = useRef();
  const inViewport = useIntersection(myRef, "-130px");

  useEffect(() => {
    menuAPI
      .getMenu()
      .then((res) => {
        setTabInfo(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div className={classes.mainDiv}>
      {isLoaded && <Navbar tabInfo={tabInfo} />}
      <div className={classes.mainBody}>
        <Home myRef={myRef} inViewport={inViewport} />
        <About inViewport={inViewport} />
        <Skill />
        <Project2 />
        <Contact2 />
      </div>
      <Footer
        value={value}
        setValue={setValue}
        tabInfo={tabInfo}
        isSpy={isSpy}
        setIsSpy={setIsSpy}
        setName={setName}
      />
    </div>
  );
}

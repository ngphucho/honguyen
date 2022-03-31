import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { menu as tabInfo } from "../../assets/Data/menu";
import { makeStyles } from "@mui/styles";
import menuAPI from "../../services/menuAPI";
import Loading from "../../components/Loading";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Project from "../../pages/Project";
import Contact from "../../pages/Contact";

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
    minHeight: "calc(100vh - 64px)",
    // padding: "1.5rem 0",
    backgroundColor: "#212121",
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

  const handleChange = (e, value) => {
    setValue(value);
  };

  const findIndexByLocation = (location) => {
    let index = tabInfo.findIndex((tab) => {
      return tab.to === location;
    });
    if (index < 0) {
      index = 0;
    }
    setValue(tabInfo[index].index);
  };

  useEffect(() => {
    if (isLoaded) {
      findIndexByLocation(location.pathname);
    }
  }, [location, isLoaded]);

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

  if (error) {
    return <div>Error:{error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className={classes.mainDiv}>
        <Header
          value={value}
          handleChange={handleChange}
          tabInfo={tabInfo}
          setValue={setValue}
          isSpy={isSpy}
          setIsSpy={setIsSpy}
        />
        <div className={classes.mainBody}>
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
        <Footer
          value={value}
          setValue={setValue}
          tabInfo={tabInfo}
          isSpy={isSpy}
          setIsSpy={setIsSpy}
        />
      </div>
    );
  }
}

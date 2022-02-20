import React from "react";
import { useState, useEffect } from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import { useNavigate, useLocation } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    // backgroundColor: theme.palette.secondary.transparent50,
    // marginLeft: "auto",
    // marginRight: "auto",
    // borderRadius: "5px",
    // backgroundColor: theme.palette.secondary.transparent50,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    "&.MuiTab-root": {
      minWidth: 100,
      color: theme.palette.secondary.transparent50,
      fontWeight: 700,
      fontSize: "1.1rem",
      "&.Mui-selected": {
        color: "#fff",
      },
    },
  },
  appbarMargin: {
    paddingTop: theme.mixins.toolbar.minHeight + 8,
  },
}));

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

  const tabInfo = [
    { label: "home", index: 0, to: "/home" },
    { label: "about", index: 1, to: "/about" },
    { label: "skill", index: 2, to: "/skill" },
    { label: "project", index: 3, to: "/project" },
    { label: "contact", index: 4, to: "/contact" },
    { label: "tmp", index: 5, to: "/tmp" },
  ];

  const tabs = (
    <React.Fragment>
      <Tabs
        // className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        // textColor="secondary"
        TabIndicatorProps={{
          style: { height: "100%", opacity: 0.1, backgroundColor: "#bdbdbd" },
        }}
      >
        {tabInfo.map((tab) => (
          <Tab
            disableTouchRipple
            key={tab.index}
            className={classes.tab}
            label={tab.label}
            onClick={() => {
              navigate(tab.to);
            }}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

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
    findIndexByLocation(location.pathname);
  }, [location]);

  return (
    <div className="header">
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <div className={classes.tabContainer}>{tabs}</div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.appbarMargin}></div>
    </div>
  );
}

import React, { useState } from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import { useNavigate, useLocation } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
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
        // color: "#fff",
        color: theme.palette.secondary.transparent50,
        fontWeight: 700,
      },
    },
  },
  appbarMargin: {
    paddingTop: theme.mixins.toolbar.minHeight,
  },
}));

export default function SlideBar({ value, setValue, handleChange, tabInfo }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { height: "100%", opacity: 0.1, backgroundColor: "#bdbdbd" },
        }}
      >
        {tabInfo.map((tab) => (
          <Tab
            disableTouchRipple
            key={tab.index}
            value={tab.index}
            className={classes.tab}
            onClick={() => {
              navigate(`/edit${tab.to}`);
            }}
            label={tab.label}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );

  return (
    <div className="header">
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <div style={{ display: "flex" }} className={classes.tabContainer}>
              {tabs}
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.appbarMargin}></div>
    </div>
  );
}

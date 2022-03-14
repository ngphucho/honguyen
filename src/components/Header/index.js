import React from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import { useNavigate, useLocation, Navigate, Link } from "react-router-dom";
import MyDrawer from "../MyDrawer";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import downloadFile from "../../services/downloadFile";

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
        color: "#fff",
      },
    },
  },
  appbarMargin: {
    paddingTop: theme.mixins.toolbar.minHeight,
  },
}));

export default function Header({ value, handleChange, tabInfo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));

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
            value={tab.index}
            className={classes.tab}
            label={tab.label}
            onClick={() => {
              navigate(tab.to);
            }}
          />
        ))}
      </Tabs>
      <Tab
        disableTouchRipple
        className={classes.tab}
        label="DOWNLOAD"
        onClick={() => {
          downloadFile(
            "https://i.postimg.cc/QMMZkcz6/booking-movie-film-detail.png",
            "myCV.png"
          );
        }}
      />
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <MyDrawer dataList={tabInfo} index={value} />
    </React.Fragment>
  );

  return (
    <div className="header">
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            {matchMD ? (
              <div className={classes.tabContainer}>{tabs}</div>
            ) : (
              <Container>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <div style={{ position: "absolute", left: -12.375 }}>
                    {drawer}
                  </div>
                  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    {location.pathname.replace("/", "")}
                  </Typography>
                </div>
              </Container>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.appbarMargin}></div>
    </div>
  );
}

import React, { useState } from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import MyDrawer from "../MyDrawer";
import { Container, Typography, IconButton } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import downloadFile from "../../services/downloadFile";
import { Link, scroller } from "react-scroll";

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

export default function Header({
  value,
  setValue,
  handleChange,
  tabInfo,
  isSpy,
  setIsSpy,
  name,
  setName,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));

  const tabs = (
    <React.Fragment>
      <Tabs
        // className={classes.tabContainer}
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
              setValue(tab.index);
              setIsSpy(false);
              setTimeout(() => {
                setIsSpy(true);
              }, 1000);
              scroller.scrollTo(tab.label, {
                smooth: true,
                duration: 600,
                offset: -64,
              });
            }}
            label={
              <div>
                <Link
                  style={{ display: "none" }}
                  to={tab.label}
                  smooth={true}
                  spy={isSpy}
                  duration={600}
                  offset={-64}
                  onSetActive={() => {
                    setValue(tab.index);
                    setName(tab.label);
                  }}
                  // onClick={() => {
                  //   setValue(tab.index);
                  //   setIsSpy(false);
                  //   setTimeout(() => {
                  //     setIsSpy(true);
                  //   }, 1000);
                  // }}
                ></Link>
                {tab.label}
              </div>
            }
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
      <MyDrawer
        dataList={tabInfo}
        index={value}
        isSpy={isSpy}
        setIsSpy={setIsSpy}
        name={name}
        setName={setName}
        setValue={setValue}
      />
    </React.Fragment>
  );

  return (
    <div className="header">
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <div
              style={{ display: matchMD ? "flex" : "none" }}
              className={classes.tabContainer}
            >
              {tabs}
            </div>
            {matchMD ? null : (
              <Container>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                    marginRight: -12.375,
                  }}
                >
                  <div style={{ marginLeft: -12.375 }}>{drawer}</div>
                  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    {name}
                  </Typography>
                  <div style={{ marginRight: -12.375 }}>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        downloadFile(
                          "https://i.postimg.cc/QMMZkcz6/booking-movie-film-detail.png",
                          "myCV.png"
                        );
                      }}
                    >
                      <FileDownloadIcon fontSize="large" />
                    </IconButton>
                  </div>
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

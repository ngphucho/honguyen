import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { menu as tabInfo } from "../../assets/Data/menu";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useMediaQuery } from "@mui/material";

export default function AppLayout() {
  const theme = useTheme();
  const matchSM = theme.breakpoints.up("sm");
  const location = useLocation();
  const [value, setValue] = useState(0);
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
    findIndexByLocation(location.pathname);
  }, [location]);
  return (
    <div>
      <Header value={value} handleChange={handleChange} tabInfo={tabInfo} />
      <div
        style={{
          minHeight: "calc(100vh - 64px - 100px - 2rem)",
          padding: "1.5rem 0",
          backgroundColor: "#212121",
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer value={value} handleChange={handleChange} tabInfo={tabInfo} />
    </div>
  );
}

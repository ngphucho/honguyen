import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <Header></Header>
      <div style={{minHeight: 'calc(100vh - 128px)'}}>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

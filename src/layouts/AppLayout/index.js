import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import { AnimatePresence } from "framer-motion";

export default function AppLayout() {
  return (
    <div>
      <Header />
      {/* <AnimatePresence exitBeforeEnter> */}
        {/* <AnimatedPage> */}
          <div style={{ minHeight: "calc(100vh - 128px)" }}>
            <Outlet />
          </div>
        {/* </AnimatedPage> */}
      {/* </AnimatePresence> */}
      <Footer />
    </div>
  );
}

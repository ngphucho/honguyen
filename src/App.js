// css
import "./styles";
import smoothScroll from "./utils/smoothScroll";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/UI/Theme";

//layouts
import AppLayout from "./layouts/AppLayout";

//loading
import Loading from "./components/Loading";
// import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

//pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Project"));

function App() {
  useEffect(() => {
    smoothScroll.init();
  }, []);
  return (
    // <Suspense fallback={<Loading />}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <AnimatePresence exitBeforeEnter> */}
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <AppLayout /> */}
      </BrowserRouter>
    </ThemeProvider>
    // </Suspense>
  );
}

export default App;

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
        <ScrollToTop>
          <Routes>
            {/* Router Admin */}

            {/* Router App */}
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="/home" />} />
              <Route
                path="home"
                element={
                  <Suspense fallback={null}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="about"
                element={
                  <Suspense fallback={null}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="project"
                element={
                  <Suspense fallback={null}>
                    <Project />
                  </Suspense>
                }
              />
              <Route
                path="contact"
                element={
                  <Suspense fallback={null}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route path="*" element={<Navigate to="home" />} />
            </Route>
          </Routes>
        </ScrollToTop>
        {/* </AnimatePresence> */}
      </BrowserRouter>
    </ThemeProvider>
    // </Suspense>
  );
}

export default App;

// css
import "./styles";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";

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
// const Skill = lazy(() => import("./pages/Skill"));

function App() {
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
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="about"
                element={
                  <Suspense fallback={<Loading />}>
                    <About />
                  </Suspense>
                }
              />
              {/* <Route
            path="skill"
            element={
              <Suspense fallback={<Loading />}>
                <Skill />
              </Suspense>
            }
          /> */}
              <Route
                path="project"
                element={
                  <Suspense fallback={<Loading />}>
                    <Project />
                  </Suspense>
                }
              />
              <Route
                path="contact"
                element={
                  <Suspense fallback={<Loading />}>
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

// css
import "./styles";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import React, { Suspense, lazy, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/UI/Theme";

//layouts
import AppLayout from "./layouts/AppLayout";

//loading
import Loading from "./components/Loading";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Project"));
const Skill = lazy(() => import("./pages/Skill"));

function App() {
  const location = useLocation();
  return (
    
    // <Suspense fallback={<Loading />}>
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
      {/* <AnimatePresence exitBeforeEnter> */}
        <Routes>
          {/* Router Admin */}

          {/* Router App */}
          <Route path="/" element={<AppLayout/>}>
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
            <Route
              path="skill"
              element={
                <Suspense fallback={<Loading />}>
                  <Skill />
                </Suspense>
              }
            />
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
            <Route
              path="tmp"
              element={
                <Suspense fallback={<Loading />}>
                  <Loading />
                </Suspense>
              }
            />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="home" />} />
          </Route>
        </Routes>
      {/* </AnimatePresence> */}
      {/* </BrowserRouter> */}
    </ThemeProvider>
    // </Suspense>
  );
}

export default App;

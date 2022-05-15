// css
import "./styles";
import smoothScroll from "./utils/smoothScroll";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/UI/Theme";

//layouts
import AppLayout from "./layouts/AppLayout";
import EditLayout from "./layouts/EditLayout";

//loading
import Loading from "./components/Loading";
// import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

//pages
const EditHome = lazy(() => import("./pages/EditHome"));
const EditAbout = lazy(() => import("./pages/EditAbout"));
const EditContact = lazy(() => import("./pages/EditContact"));
const EditProject = lazy(() => import("./pages/EditProject"));

function App() {
  // useEffect(() => {
  //   smoothScroll.init();
  // }, []);
  return (
    // <Suspense fallback={<Loading />}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Edit Layout */}
          <Route path="edit" element={<EditLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route
              path="home"
              element={
                <Suspense fallback={<Loading />}>
                  <EditHome />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<Loading />}>
                  <EditAbout />
                </Suspense>
              }
            />
            <Route
              path="project"
              element={
                <Suspense fallback={<Loading />}>
                  <EditProject />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<Loading />}>
                  <EditContact />
                </Suspense>
              }
            />
          </Route>

          {/* AppLayout */}
          <Route index element={<AppLayout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    // </Suspense>
  );
}

export default App;

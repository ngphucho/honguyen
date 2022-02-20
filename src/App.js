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

//pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Project"));
const Skill = lazy(() => import("./pages/Skill"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* Router Admin */}

            {/* Router App */}
            <Route path="/" element={<AppLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skill" element={<Skill />} />
              <Route path="project" element={<Project />} />
              <Route path="contact" element={<Contact />} />
              <Route path="tmp" element={<Loading />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<Navigate to="home" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;

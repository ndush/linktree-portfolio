import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Links from "./pages/Links";
import Projects from "./pages/Projects";
import MainNavigation from "./components/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Routes>
          <Route exact path="/" element={<Links />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

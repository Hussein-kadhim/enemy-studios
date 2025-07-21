import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Landing sections
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Experiences from "./components/pages/Experiences.jsx";
import Contact from "./components/pages/Contact.jsx";

import Games from "./components/Games.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Experiences />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/games"
          element={
            <>
              <Games />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

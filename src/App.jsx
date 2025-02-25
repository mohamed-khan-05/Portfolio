import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// flex-grow
const App = () => {
  const [tab, setTab] = useState("about");
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar tab={tab} setTab={setTab} />
        <div className="">
          <Routes>
            <Route path="/" element={<Home setTab={setTab} />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

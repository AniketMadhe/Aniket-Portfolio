import React from "react";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Design from "./pages/Design";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="w-full h-screen bg-blue-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/web-designs" element={<Design />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      App
    </div>
  );
}

export default App;

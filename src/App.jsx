import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './CarWebsite/Components/JSX/Navbar';

// Pages
import Cars from './CarWebsite/Pages/Cars';
import Contact from './CarWebsite/Pages/Contact';
import About from './CarWebsite/Pages/About';
import Works from './CarWebsite/Pages/Works';
import Home from './CarWebsite/Pages/Home';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </>
  );
}
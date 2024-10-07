import React from "react";
import "./css/global.css";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import BlogSection from "./components/BlogSection";
import PictureSection from "./components/PictureSection";
import Footer from "./components/Footer";
import Home from "./todo/page";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="blog" element={<BlogSection />} />
        <Route path="pictures" element={<PictureSection />} />
        <Route path="todo" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./css/global.css";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import BlogSection from "./components/BlogSection";
import CommentSection from "./components/CommentSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="blog" element={<BlogSection />} />
        <Route path="comment" element={<CommentSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

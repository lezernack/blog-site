import React from "react";
import "./css/global.css";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import BlogSection from "./components/BlogSection";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomeSection />} />
        <Route path="blog" element={<BlogSection />} />
        <Route path="comment" element={<CommentSection />} />
      </Routes>
    </div>
  );
}

export default App;

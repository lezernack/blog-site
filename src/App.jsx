import React from "react";
import "./css/global.css";
import "./css/App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import BlogSection from "./components/BlogSection";
import CommentSection from "./components/CommentSection";

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <BlogSection />
      <br />
      <CommentSection />
    </div>
  );
}

export default App;

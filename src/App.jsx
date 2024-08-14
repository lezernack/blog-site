import React from "react";
import "./css/global.css";
import "./css/App.css";
import Navbar from "./components/navbar";
import BlogSection from "./components/BlogSection";
import PictureSection from "./components/pictureSection";

function App() {
  return (
    <div>
      <Navbar />
      <BlogSection />
      <PictureSection />
    </div>
  );
}

export default App;

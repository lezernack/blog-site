import React from "react";
import "./css/global.css";
import "./css/App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import PictureSection from "./components/PictureSection";
import VideoGameSection from "./components/VideoGameSection";
import BookSection from "./components/BookSection";

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <PictureSection />
      <div>
        <VideoGameSection />
        <BookSection />
      </div>
    </div>
  );
}

export default App;

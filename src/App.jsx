import React from "react";
import "./css/global.css";
import "./css/App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import PictureSection from "./components/PictureSection";
import VideoGameSection from "./components/VideoGameSection";

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <PictureSection />
      <div>
        <VideoGameSection />
      </div>
    </div>
  );
}

export default App;

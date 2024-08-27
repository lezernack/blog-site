import React from "react";
import "./css/global.css";
import "./css/App.css";
import Navbar from "./components/navbar";
import HomeSection from "./components/HomeSection";
import PictureSection from "./components/PictureSection";

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <PictureSection />
    </div>
  );
}

export default App;

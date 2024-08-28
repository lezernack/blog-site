import React from "react";
import "./css/global.css";
import "./css/App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <div>
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

export default App;

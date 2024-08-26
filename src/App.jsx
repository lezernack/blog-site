import React from "react";
import "./css/global.css";
import "./css/App.css";
import Navbar from "./components/navbar";
import BlogSection from "./components/BlogSection";

function App() {
  return (
    <div>
      <Navbar />
      <BlogSection />
    </div>
  );
}

export default App;

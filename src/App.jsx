import React from "react";
import logo from "./logo.svg";
import "./global.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="AppSection">
      <h1>Hello World</h1>
      <img src={logo} alt="logo" height="500" width="500" />
    </div>
  );
}

export default App;

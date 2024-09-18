import React from "react";
import "../css/global.css";
import "../css/homeSection.css";
import background from "../images/background1.jpg";
import PictureSection from "./PictureSection";
import Footer from "./Footer";

const HomeSection = () => {
  return (
    <div className="home">
      <div className="Welcome">
        <img
          src={background}
          className="welcomeImg"
          width="550px"
          height="100px"
        />
      </div>

      <div className="About">
        <h2> About Me</h2>
        <p className="about">
          I&apos;m currently a student learning Software Development. I enjoy
          reading books and playing VideoGames.
        </p>

        <PictureSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomeSection;

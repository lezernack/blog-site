import React from "react";
import "../css/global.css";
import "../css/homeSection.css";
import PictureSection from "./PictureSection";
import Footer from "./Footer";

const HomeSection = () => {
  return (
    <>
      <div className="Welcome">
        <h1> Welcome </h1>
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
    </>
  );
};

export default HomeSection;

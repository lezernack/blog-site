import React from "react";
import "../css/global.css";
import "../css/homeSection.css";
import PictureSection from "./PictureSection";
import Navbar from "./Navbar";
import BlogSection from "./BlogSection";
import CommentSection from "./CommentSection";

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
      <BlogSection />
      <CommentSection />
    </>
  );
};

export default HomeSection;

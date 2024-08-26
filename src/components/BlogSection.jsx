import React from "react";
import "../css/global.css";
import "../css/BlogSection.css";
import PictureSection from "./pictureSection";

const BlogSection = () => {
  return (
    <>
      <div className="section1">
        <h1> Welcome to my Blog</h1>
      </div>
      <div className="AbtPic">
        <div className="section2">
          <h2> About Me</h2>
          <p className="about">
            My name is Lukas. I&apos;m currently a student. I like reading books
            and playing video games
          </p>
          <br />
          <ul>
            <li>1</li>
            <li>0</li>
            <li>0</li>
          </ul>
        </div>
        <PictureSection />
      </div>
    </>
  );
};

export default BlogSection;

import React from "react";
import "../css/global.css";
import "../css/homeSection.css";

const HomeSection = () => {
  return (
    <>
      <div className="Welcome">
        <h1> Welcome </h1>
      </div>

      <div className="About">
        <h2> A little bit about Me</h2>
        <p className="about">
          I&apos;m currently a student learning Software Development. I enjoy
          reading books and playing VideoGames. That's what this blog will be
          about; VideoGames and Books.
        </p>
      </div>
    </>
  );
};

export default HomeSection;

import React from "react";
import "../css/global.css";
import "../css/homeSection.css";
import background from "../images/background1.jpg";
import book from "../images/book.png";
import controller from "../images/controller.png";

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

        <div className="pictures">
          <section className="book">
            <img src={book} height="200px" width="200px" />
          </section>
          <section className="controller">
            <img src={controller} height="200px" width="200px" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

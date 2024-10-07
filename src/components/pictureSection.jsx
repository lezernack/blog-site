import React from "react";
import "../css/global.css";
import "../css/pictureSection.css";
import book from "../images/book.png";
import controller from "../images/controller.png";
import dog from "../images/dog.jpg";
import cat from "../images/cat.jpg";

const pictureSection = () => {
  return (
    <div>
      <h1>Home</h1>
      <caption>These pictures are used in the Home section</caption>
      <div className="cards">
        <div className="card1">
          <div className="card1-inner">
            <img
              src={book}
              className="card1-front"
              height="200px"
              width="200px"
            />

            <img
              src={controller}
              className="card1-back"
              height="200px"
              width="200px"
            />
          </div>
        </div>
      </div>

      <h1>Blog</h1>
      <caption>These pictures are used in the Blog section</caption>
      <div className="cards">
        <div className="card1">
          <div className="card1-inner">
            <img
              src={dog}
              className="card1-front"
              height="200px"
              width="200px"
            />

            <img
              src={cat}
              className="card1-back"
              height="200px"
              width="200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default pictureSection;

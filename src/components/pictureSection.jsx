import React from "react";
import "../css/global.css";
import "../css/pictureSection.css";
import book from "../images/book.png";
import controller from "../images/controller.png";

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
    </div>
  );
};

export default pictureSection;

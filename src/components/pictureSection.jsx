import React from "react";
import "../css/global.css";
import "../css/pictureSection.css";
import book from "../images/book.png";
import controller from "../images/controller.png";

const pictureSection = () => {
  return (
    <div className="cards">
      <div className="card1">
        <img src={book} className="img1" height="200px" width="200px" />
      </div>
      <div className="card2">
        <img src={controller} className="img2" height="200px" width="200px" />
      </div>
    </div>
  );
};

export default pictureSection;

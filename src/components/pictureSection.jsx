import React from "react";
import "../css/global.css";
import "../css/pictureSection.css";
import book from "../images/book.png";
import controller from "../images/controller.png";

const pictureSection = () => {
  return (
    <div id="pictures">
      <ul>
        <li>
          <img src={book} alt="book" height="300" width="300" />
        </li>
        <li>
          <img
            src={controller}
            alt="videoGame controller"
            height="300"
            width="300"
          />
        </li>
      </ul>
    </div>
  );
};

export default pictureSection;

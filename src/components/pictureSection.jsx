import React from "react";
import "../css/global.css";
import book from "../images/book.png";
import controller from "../images/controller.png";

const pictureSection = () => {
  return (
    <div>
      <ul>
        <li>
          <img src={book} alt="book" height="500" width="500" />
        </li>
        <li>
          <img
            src={controller}
            alt="videoGame controller"
            height="500"
            width="500"
          />
        </li>
      </ul>
    </div>
  );
};

export default pictureSection;

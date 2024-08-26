import React from "react";
import "../css/global.css";
import "../css/pictureSection.css";
import book from "../images/book.png";
import controller from "../images/controller.png";

const pictureSection = () => {
  return (
    <div id="pictures">
      <section className="book">
        <img src={book} alt="book" height="300" width="300" />
      </section>
      <section className="controller">
        <img
          src={controller}
          alt="videoGame controller"
          height="300"
          width="300"
        />
      </section>
    </div>
  );
};

export default pictureSection;

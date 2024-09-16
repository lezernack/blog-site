import React from "react";
import "../css/global.css";
import "../css/pictureSection.css";
import book from "../images/book.png";
import controller from "../images/controller.png";

const pictureSection = () => {
  return (
    <div className="pictures">
      <section className="book">
        <img src={book} height="200px" width="200px" />
      </section>
      <section className="controller">
        <img src={controller} height="200px" width="200px" />
      </section>
    </div>
  );
};

export default pictureSection;

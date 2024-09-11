import React from "react";
import "../css/global.css";
import "../css/pictureSection.css";
import book from "../images/book.png";
import controller from "../images/controller.png";

const pictureSection = () => {
  return (
    <div className="pictures">
      <section className="book"></section>
      <section className="controller"></section>
    </div>
  );
};

export default pictureSection;

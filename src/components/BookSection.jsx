import React from "react";
import "../css/global.css";
import "../css/bookSection.css";

const BookSection = () => {
  return (
    <div>
      <div className="header">
        <h1>Books</h1>
      </div>
      <div className="section">
        <div className="list">
          <ol>
            <li>left</li>
            <br />
            <li>right</li>
            <br />
            <li>left</li>
            <br />
          </ol>
        </div>
        <div className="description">
          <h2>Words</h2>
        </div>
      </div>
    </div>
  );
};

export default BookSection;

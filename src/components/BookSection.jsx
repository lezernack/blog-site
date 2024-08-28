import React from "react";
import "../css/global.css";
import "../css/gameBookSection.css";

const BookSection = () => {
  return (
    <div>
      <div className="header">
        <h1>Books</h1>
      </div>
      <div className="section">
        <div className="list">
          <ul>
            <li>Cirque Du Freak</li>
            <br />
            <li>Micheal Bay</li>
            <br />
            <li>Percy Jackson</li>
            <br />
          </ul>
        </div>
        <div className="dscrptDiv">
          <h2 className="dscrpt">
            Cirque Du Freak is a book series with 7 books. It takes 3 books
            until the story actually gets good. I don't know where I found the
            patience to read 3 boring books, but I did.
          </h2>
          <h2 className="dscrpt">
            Now the Micheal Bay books are basically just a power fantasy. And
            when I say power fantasy I mean that the main character just keeps
            getting more powerful, even if only temporarially. It's simple, but
            you're always wondering just how he's going get more power.
          </h2>
          <h2 className="dscrpt">
            Percy Jackson is at it's core just Greek mythologies about Demi-gods
            meets modern day. I enjoy how the author makes the characters feel
            real.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BookSection;

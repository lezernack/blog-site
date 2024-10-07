import React from "react";
import "../css/global.css";
import "../css/blogSection.css";
import CommentSection from "./CommentSection";

const BlogSection = () => {
  return (
    <div>
      <div className="blog">
        <header className="header">
          <h2 className="title">Which are better Cats or Dogs?</h2>
        </header>

        <div className="dscrptDiv">
          <p className="dscrpt">
            Now really it comes down to the individual person and the living
            space. First Cats;
          </p>
          <br />
          <ul>
            <li>Pros</li>
          </ul>
          <ul>
            <li>Cons</li>
          </ul>
        </div>
      </div>

      <br />
      <CommentSection />
    </div>
  );
};

export default BlogSection;

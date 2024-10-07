import React from "react";
import "../css/global.css";
import "../css/blogSection.css";
import CommentSection from "./CommentSection";
import dog from "../images/dog.jpg";
import cat from "../images/cat.jpg";

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
            space. So here&apos;s a really basic list of Pros and Cons for each
            pet.
          </p>
          <br />
          <div className="dogCat">
            <img src={cat} height="250px" width="250px" />
            <img src={dog} height="250px" width="250px" />
          </div>
          <br />
          <div className="vs">
            <div className="catList">
              <h3 className="h3">Cats</h3>
              <ul>
                <li className="Item">Pros</li>
                <li>They don&apos;t require too much attention:</li>
                <br />
                <li>They are independent creatures:</li>
                <br />
                <li>They&apos;re tiny, so don&apos;t take up much space:</li>
              </ul>
              <ul>
                <li className="Item">Cons</li>
                <li>They will break cups and fragile things:</li>
                <br />
                <li>Have to clean out litter box:</li>
                <br />
                <li>Won&apos;t follow commands:</li>
              </ul>
            </div>
            <div className="dogList">
              <h3 className="h3">Dogs</h3>
              <ul>
                <li className="Item">Pros</li>
                <li>Easy to teach tricks:</li>
                <br />
                <li>Love attention:</li>
                <br />
                <li>Will guard you and your&apos; home:</li>
                <br />
              </ul>
              <ul>
                <li className="Item">Cons</li>
                <li>Hate being alone:</li>
                <br />
                <li>Some are really loud:</li>
                <br />
                <li>
                  Can chew on shoes or anything else that they&apos;re not
                  suppose to:
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />
      <CommentSection />
    </div>
  );
};

export default BlogSection;

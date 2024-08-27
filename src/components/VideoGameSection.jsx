import React from "react";
import "../css/global.css";
import "../css/videoGameSection.css";

const VideoGameSection = () => {
  return (
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
  );
};

export default VideoGameSection;

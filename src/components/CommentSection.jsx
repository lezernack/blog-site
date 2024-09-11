import React from "react";
import "../css/global.css";
import "../css/commentSection.css";
import Navbar from "./Navbar";

const CommentSection = () => {
  return (
    <div>
      <hr />
      <div className="comment-container">
        <form>
          <input className="comments" type="text" placeholder="Comment" />
        </form>
      </div>
    </div>
  );
};

export default CommentSection;

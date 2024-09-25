import React from "react";
import "../css/global.css";
import "../css/commentSection.css";

const CommentSection = () => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("comment button is working");
  };

  return (
    <div className="cntnr">
      <div className="cmnt-cntnr">
        <form className="cmnt-sctn">
          <input className="cmnts" type="text" placeholder="Comment" />
          <button className="btn" onClick={onClick}>
            Submit
          </button>
        </form>
      </div>
      <table>
        <tbody>
          <thead>Hello</thead>
        </tbody>
      </table>
    </div>
  );
};

export default CommentSection;

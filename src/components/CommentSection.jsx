import React from "react";
import "../css/global.css";
import "../css/commentSection.css";
import Navbar from "./Navbar";

const CommentSection = () => {
  return (
    <div className="cntnr">
      <Navbar />
      <theader className="table">
        <tr>
          <th>title</th>
          <th>title</th>
        </tr>
      </theader>
      <div className="cmnt-cntnr">
        <form className="cmnt-sctn">
          <input className="cmnts" type="text" placeholder="Comment" />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;

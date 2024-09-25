import React, { useState } from "react";
import "../css/global.css";
import "../css/commentSection.css";

const CommentSection = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(`${inputValue}`);
  };

  return (
    <div className="cntnr">
      <div className="cmnt-cntnr">
        <form className="cmnt-sctn">
          <input
            className="cmnts"
            type="text"
            placeholder="Comment"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="btn" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
      <table className="table">
        <tr>
          <td></td>
        </tr>
        <tr>hello</tr>
      </table>
    </div>
  );
};

export default CommentSection;

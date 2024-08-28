import React from "react";
import "../css/global.css";
import "../css/gameBookSection.css";

const VideoGameSection = () => {
  return (
    <div>
      <div className="header">
        <h1>VideoGames</h1>
      </div>
      <div className="section">
        <div className="list">
          <ul>
            <li>Ghost of Tsushima</li>
            <br />
            <li>Red Dead Redemption 2</li>
          </ul>
        </div>
        <div className="dscrptDiv">
          <h2 className="dscrpt">
            Ghost Of Tsushima is about a samurai fighting against a mongol
            invansion of his homeland. The story has a lot of elements that
            blend together to create something greater than it's parts. Gameplay
            wise, stealth is simple but works well, however the combat is really
            where it shines; it's addicting and makes you feel cool.
          </h2>
          <h2 className="dscrpt">
            The story in Red Redemption 2 is amazing. The gameplay really makes
            you feel like a cowboy.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoGameSection;

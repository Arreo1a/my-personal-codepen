import React, { useState } from "react";

import "./index.scss";
import { Link } from "react-router-dom";

function index() {
  const [fullScreen, setFullScreen] = useState(false);
  const [theString, setTheString] = useState([]);

  function getCharacters() {
    let myString = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&=";

    let i = 0;
    while (i < 10000) {
      myString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      i++;
    }

    let splitText = myString.split();

    // console.log(splitText);
    setTheString(splitText);

    // console.log(theString);
  }

  return (
    <div className="hyperplexedHoverEffect">
      <div
        className="makeFullScreenBtn"
        onClick={() => setFullScreen(!fullScreen)}
      >
        {fullScreen ? "Contain" : "Cover"}
      </div>

      <div className="linksBox">
        <Link
          to="https://codepen.io/Hyperplexed/pen/VwqLQbo"
          target="_blank"
          className=""
        >
          Original Version
        </Link>
        <Link
          to="https://github.com/Arreo1a/my-personal-codepen"
          target="_blank"
          className=""
        >
          My Github
        </Link>
      </div>

      <div
        className={`myBox myBoxFullScreen__${fullScreen}`}
        onMouseMove={() => getCharacters()}
      >
        <div className="stringOfText">{theString}</div>
        <img src="/M.png" alt="" className="myLogo" draggable="false" />
      </div>
    </div>
  );
}

export default index;

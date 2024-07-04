import React, { useState } from "react";

import "./index.scss";
import { Link } from "react-router-dom";

function index() {
  const [fullScreen, setFullScreen] = useState(true);
  const [transparentBtns, setTransparentBtns] = useState(false);
  const [theString, setTheString] = useState([]);

  function getCharacters() {
    let myString = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&=";

    let i = 0;
    while (i < 100000) {
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
        className={`makeFullScreenBtn  ${
          transparentBtns && "makeFullScreenBtn__transparent"
        }`}
        onClick={() => setFullScreen(!fullScreen)}
      >
        {fullScreen ? "Contain" : "Cover"}
      </div>

      <div
        className={`makeTransparentBtn ${
          transparentBtns && "makeTransparentBtn__transparent"
        }`}
        onClick={() => setTransparentBtns(!transparentBtns)}
      >
        {transparentBtns ? "Give btns color" : "Make btns transparent"}
      </div>

      <div className={`linksBox ${transparentBtns && "linksBox__transparent"}`}>
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

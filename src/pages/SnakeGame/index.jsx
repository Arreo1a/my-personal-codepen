import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

function index() {
  const [time, setTime] = useState(0);

  const [keyPressed, setKeyPressed] = useState();

  const [snakePosition, setSnakePosition] = useState({ x: 0, y: 0 });
  const [snakeDirection, setSnakeDirection] = useState();

  const gardenSize = useRef();

  useEffect(() => {
    console.log(gardenSize.current.offsetWidth);
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      setKeyPressed(e.keyCode);

      if (e.keyCode === 65) {
        setSnakeDirection("left");
      }
      if (e.keyCode === 68) {
        setSnakeDirection("right");
      }

      if (e.keyCode === 83) {
        setSnakeDirection("down");
      }
      if (e.keyCode === 87) {
        setSnakeDirection("up");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime((time) => time + 1), 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const snake = useRef();

  const handleSnakeMovement = () => {
    // Check what direction it's looks at
    // Move based on position where it's at
    // -- current position and add it to the translate

    // const position = document.getElementById("snake").getBoundingClientRect();
    // console.log("x: ", position.top + " --- ", "y: ", position.left);

    if (!snake.current) return;

    if (snakeDirection === "right") {
      return `translate(${time * 0.05}px)`;
    }
    if (snakeDirection === "left") {
      return `translate(${time * -0.05}px)`;
    }
  };

  return (
    <div className="snakeGame">
      <h3>
        {keyPressed} : {snakeDirection}
      </h3>

      <h3>
        X: {snakePosition.x} Y: {snakePosition.y}
      </h3>

      <div className="garden" ref={gardenSize}>
        <div
          className="pretendSnake"
          id="snake"
          ref={snake}
          style={{ transform: handleSnakeMovement() }}
        ></div>
      </div>
    </div>
  );
}

export default index;

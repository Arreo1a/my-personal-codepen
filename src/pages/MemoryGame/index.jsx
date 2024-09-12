import React, { useState } from "react";

import "./index.scss";

function MemoryGame() {
  const [selectedCards, setSelectedCards] = useState({});

  return (
    <div className="memoryGame">
      <h1>Memory Game</h1>

      <div className="cardsContainer">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MemoryGame;

function Card() {
  const [fliped, setFliped] = useState(false);

  return (
    <div
      className={`card  cardFliped__${fliped}`}
      onClick={() => setFliped(!fliped)}
    >
      <div className="backside">?</div>
      <div className="frontSide">
        <img
          src="./images/Alina and I - DLC Prom 2024.jpg"
          alt=""
          className="cardImage"
        />
      </div>
    </div>
  );
}

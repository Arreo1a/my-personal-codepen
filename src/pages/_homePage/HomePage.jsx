import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage.scss">
      <h2>Trying to make stuff I see online</h2>
      <ul>
        <li>
          <Link to={"/hyperplexed-logo-hover-effect"}>
            Hyperplexed logo hover effect
          </Link>
        </li>
        <li>
          <Link to={"/snake-game"}>(Not finished) Snake Game</Link>
        </li>
      </ul>

      <h2>Trying to make random stuff</h2>
      <ul>
        <li>
          <Link to={"/slideshow"}>
            Slideshow that actually has images that slide in and out
          </Link>
        </li>
      </ul>
      <h2>Helping at Whistle Coding</h2>
      <ul>
        <li>
          <Link to={"/wc/drywall-crane"}>WC Drywall Crane</Link>
        </li>
        <li>
          <Link to={"/wc/showing-gtc-repeat"}>
            Showing Grid Template Columns: Repeat()
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;

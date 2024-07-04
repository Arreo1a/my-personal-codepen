import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage.scss">
      <h2>Stuff I wanted to do</h2>
      <ul>
        <li>
          <Link to={"/hyperplexed-logo-hover-effect"}>
            Hyperplexed logo hover effect
          </Link>
        </li>
      </ul>
      <h2>Helping at Whistle Coding</h2>
      <ul>
        <li>
          <Link to={"/wc/drywall-crane"}>WC Drywall Crane</Link>
        </li>
        <li>
          <Link to={"/showing-gtc-repeat"}>
            Showing Grid Template Columns: Repeat()
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;

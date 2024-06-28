import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage.scss">
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

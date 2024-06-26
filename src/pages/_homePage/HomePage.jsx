import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage.scss">
      <Link to={"/wc/drywall-crane"}>WC Drywall Crane</Link>
    </div>
  );
}

export default HomePage;

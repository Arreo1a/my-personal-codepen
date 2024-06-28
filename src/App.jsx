import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/_homePage/HomePage";
import WCDrywallCrane from "./pages/WCDrywallCrane";
import HectorPortfolio from "./pages/HectorPortfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wc/drywall-crane" element={<WCDrywallCrane />} />
        <Route path="/showing-gtc-repeat" element={<HectorPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;

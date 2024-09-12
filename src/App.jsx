import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/_homePage/HomePage";
import WCDrywallCrane from "./pages/WCDrywallCrane";
import HectorPortfolio from "./pages/HectorPortfolio";
import Slideshow from "./pages/Slideshow";

import SnakeGame from "./pages/SnakeGame";

import LogoHoverEffect from "./pages/CopyingStuffOnline/Hyperplexed/LogoHoverEffect";
import MemoryGame from "./pages/MemoryGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/hyperplexed-logo-hover-effect"
          element={<LogoHoverEffect />}
        />

        <Route path="/snake-game" element={<SnakeGame />} />
        <Route path="/memory-game" element={<MemoryGame />} />

        <Route path="/slideshow" element={<Slideshow />} />

        <Route path="/wc/drywall-crane" element={<WCDrywallCrane />} />
        <Route path="/wc/showing-gtc-repeat" element={<HectorPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;

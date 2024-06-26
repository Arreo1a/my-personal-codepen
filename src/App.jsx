import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/_homePage/HomePage";
import WCDrywallCrane from "./pages/WCDrywallCrane";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wc/drywall-crane" element={<WCDrywallCrane />} />
      </Routes>
    </Router>
  );
}

export default App;

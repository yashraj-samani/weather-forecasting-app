import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StatePage from "./pages/StatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state/:stateName" element={<StatePage />} />
      </Routes>
    </Router>
  );
}

export default App;

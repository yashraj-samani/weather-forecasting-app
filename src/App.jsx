import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StateWeatherPage from "./pages/StateWeatherPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/weather-forecasting-app/" element={<HomePage />} />
        <Route
          path="/weather-forecasting-app/state/:stateName"
          element={<StateWeatherPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;

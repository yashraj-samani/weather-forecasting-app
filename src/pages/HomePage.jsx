import React from "react";
import IndiaMap from "../components/IndiaMap";
// import InfoCard from "../components/InfoCard";

function HomePage() {
  return (
    <div>
      {/* HomePage Header */}
      <header className="homepage-header">
        <h1>India Weather Map</h1>
      </header>

      <main className="homepage-container">
        {/* India Map */}
        <IndiaMap />
        {/* InfoCard */}
        <div className="info-card">
          <h2>Instructions</h2>
          <p>
            Click on any state to know below weather overview and those of its
            cities.
          </p>
          <ul className="details-list">
            <li>Current temperature</li>
            <li>Weather condition</li>
            <li>Humidity</li>
            <li>Wind speed</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

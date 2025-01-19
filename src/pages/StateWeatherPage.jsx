import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchStateWeather, fetchWeatherData } from "../utils/weatherApi";
import styled from "styled-components";

const StateWeatherPage = () => {
  const { stateName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [cityWeatherData, setCityWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [bgColor, setBgColor] = useState("lightblue");

  useEffect(() => {
    // Fetch state-level weather on page load
    const getStateWeather = async () => {
      try {
        const data = await fetchStateWeather(stateName);
        setWeatherData(data);
        updateBackground(data.weather[0].main);
      } catch (err) {
        setError("Failed to fetch state weather.");
      }
    };
    getStateWeather();
  }, [stateName]);

  const updateBackground = (weatherCondition) => {
    switch (weatherCondition.toLowerCase()) {
      case "clear":
      case "sunny":
        setBgColor("orange"); // Sunny or clear weather
        break;
      case "rain":
      case "storm":
        setBgColor("lightblue"); // Rainy or stormy weather
        break;
      case "clouds":
        setBgColor("gray"); // Cloudy weather
        break;
      default:
        setBgColor("lightgreen"); // Default condition
    }
  };

  const handleSearchCity = async () => {
    if (!searchCity) return;

    try {
      const data = await fetchWeatherData(searchCity);
      setCityWeatherData(data);
      setError("");
      console.log(data);
    } catch (err) {
      setCityWeatherData("");
      setError("City not found.");
    }
  };

  return (
    <div
      style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}
    >
      <h1>{stateName} Weather Overview</h1>

      {/* State-level weather */}
      {weatherData ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].main}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading state weather...</p>
      )}

      {/* City Search */}
      <div>
        <h3>Search City Weather</h3>
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearchCity}>Search</button>

        {/* Display searched city weather */}
        {cityWeatherData ? (
          <div>
            <h4>{cityWeatherData.name} Weather</h4>
            <p>Temperature: {cityWeatherData.main.temp}°C</p>
            <p>Condition: {cityWeatherData.weather[0].main}</p>
            <p>Humidity: {cityWeatherData.main.humidity}%</p>
            <p>Wind Speed: {cityWeatherData.wind.speed} m/s</p>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Error handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default StateWeatherPage;

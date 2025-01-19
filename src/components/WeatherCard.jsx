import React from "react";

const WeatherCard = ({ title, data }) => {
  if (!data) return null;

  const capitalizeFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      <h2>{capitalizeFirstLetter(title)}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Condition: {data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;

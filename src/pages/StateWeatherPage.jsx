import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchStateWeather, fetchWeatherData } from "../utils/weatherApi";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";

const StateWeatherPage = () => {
  const { stateName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [cityWeatherData, setCityWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [bgColor, setBgColor] = useState("lightblue");

  //fetch weather data
  useEffect(() => {
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

  //switch for background color
  const updateBackground = (weatherCondition) => {
    switch (weatherCondition.toLowerCase()) {
      case "clear":
      case "sunny":
        setBgColor("orange");
        break;
      case "rain":
      case "storm":
        setBgColor("lightblue");
        break;
      case "clouds":
        setBgColor("gray");
        break;
      default:
        setBgColor("lightgreen");
    }
  };

  //searched city logic
  const handleSearchCity = async (city) => {
    if (!city) return;

    try {
      const data = await fetchWeatherData(city);
      setCityWeatherData(data);
      setError("");
    } catch (err) {
      setCityWeatherData(null);
      setError("City not found.");
    }
  };

  return (
    <div>
      <div className="weather-page-header">
        <h1>{stateName} Weather Overview</h1>
      </div>
      <div className="page-container" style={{ backgroundColor: bgColor }}>
        <div className="content-container">
          {/* State-level weather */}
          <div className="card">
            <WeatherCard
              title={`${stateName} State Weather`}
              data={weatherData}
            />
          </div>

          {/* City weather after search */}
          <div className="card">
            <SearchBar
              stateName={stateName}
              onSearch={(city) => {
                setSearchCity(city);
                handleSearchCity(city);
              }}
            />
            {cityWeatherData && (
              <WeatherCard
                title={`${searchCity.toLowerCase()} Weather`}
                data={cityWeatherData}
              />
            )}
            {/* Error handling */}
            {error && <p className="error-text">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateWeatherPage;

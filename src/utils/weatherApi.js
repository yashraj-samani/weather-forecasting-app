const API_KEY = "be0a10c8aa9d2f83387b41603ceae6fb";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// Fetches weather data for a specific location (city)
const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(
      `${BASE_URL}weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Weather data not found.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Fetches weather data for a specific state.
const fetchStateWeather = async (stateName) => {
  try {
    const response = await fetch(
      `${BASE_URL}weather?q=${stateName}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("State weather data not found.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchWeatherData, fetchStateWeather };

const API_KEY = "be0a10c8aa9d2f83387b41603ceae6fb"; // Replace with your OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

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

const fetchStateWeather = async (stateName) => {
  try {
    // Placeholder for fetching state-level weather. You could map states to cities or get from a geo API
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

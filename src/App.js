import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [historicalData, setHistoricalData] = useState(null); // State for historical data

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Get today's date
    const today = new Date();
    const endDate = today.toISOString().split("T")[0]; // Current date in YYYY-MM-DD format
    today.setDate(today.getDate() - 6); // Go back 6 days for a total of 7 days
    const startDate = today.toISOString().split("T")[0]; // Date 7 days ago

    // Fetch historical weather data for the last 7 days
    const historicalFetch = fetch(
      `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    );

    Promise.all([currentWeatherFetch, forecastFetch, historicalFetch])
      .then(async (responses) => {
        const weatherResponse = await responses[0].json();
        const forecastResponse = await responses[1].json();
        const historicalResponse = await responses[2].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        setHistoricalData({ city: searchData.label, ...historicalResponse });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
     <div className="container">
      <h1 className="app-title" style={{color: "#fff",fontSize: "36px"}}>Weather Monitor App</h1> {/* Added title */}
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <Forecast historicalData={historicalData} />
    </div>
  );
}

export default App;

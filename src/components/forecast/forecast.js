import React from "react";
import "./forecast.css"; // Ensure you have styles for your forecast

const Forecast = ({ historicalData }) => {
  if (!historicalData || !historicalData.daily) {
    return <div style={{color: "#fff",fontSize: "18px"}}> <br />No historical data available.</div>;
  }

  const { time, temperature_2m_max, temperature_2m_min } = historicalData.daily;

  // Reverse the data to display from yesterday to the earliest
  const reversedData = time.map((date, index) => ({
    date,
    maxTemp: temperature_2m_max[index],
    minTemp: temperature_2m_min[index],
    avgTemp: ((temperature_2m_max[index] + temperature_2m_min[index]) / 2).toFixed(2), // Calculate average temperature
  })).reverse(); // Reverse the order

  return (
    <div className="forecast-container">
      <br />
      <h2 className="forecast-title">Historical Weather Data (Last 7 Days)</h2>
      <br />
      <div className="forecast-cards">
        {reversedData.map(({ date, maxTemp, minTemp, avgTemp }, index) => (
          <div key={index} className="forecast-card">
            <h3>
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <p>Max: {maxTemp}°C</p>
            <p>Min: {minTemp}°C</p>
            <p>Avg: {avgTemp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

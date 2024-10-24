# Weather Monitoring App

## Project Overview

### Objective:

The Weather Monitoring App is a real-time data processing system designed to monitor weather conditions and provide summarized insights using rollups and aggregates. This application utilizes data from multiple APIs, including OpenWeatherMap, RapidAPI, and Open Meteo, to fetch current and historical weather data.

### Features

- **Real-Time Weather Data:** Displays current weather conditions for selected cities.
- **Historical Weather Data:** Retrieves and shows historical weather data for selected cities.
- **User-Friendly Interface:** Provides a visually appealing interface with weather icons representing current conditions.
- **Summarized Insights:** Offers summarized insights based on the aggregated data fetched from various APIs.

## Tech Stack

- **Frontend:** React.js
- **APIs Used:**
  - OpenWeatherMap API for current weather data
  - RapidAPI for city data
  - Open Meteo for historical weather data (free to use)

## Data Source

The system continuously retrieves weather data from the following APIs:
- **OpenWeatherMap API:** Requires a free API key.
- **RapidAPI:** Requires a free API key for city data.
- **Open Meteo:** Free to use without an API key.

## Installation

### Method 1: Running Locally Without Docker

> **Note:** If you are running the project locally without Docker, you can remove the `docker-compose.yml` and `Dockerfile` files.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Darshanzapda/weather-monitoring-app
- Install necessary packages:

```
npm install
npm install react-accessible-accordion
npm install react-select-async-paginate --force
```
- API Key Setup :

    - Go to `api.js` file and replace:
```
"X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
```
with
```
"X-RapidAPI-Key": YOUR_ACTUAL_API_KEY,
```
  - And replace :
```
export const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
```
with

```
export const WEATHER_API_KEY = YOUR_ACTUAL_API_KEY;
```

- Run the application:

```
npm start
```

-  Open your browser and navigate to http://localhost:3000 to access the application.


### Method 2: Using Docker
> **Note:** Note: Ensure you have Docker installed on your system.

- Clone the repository:

```
git clone https://github.com/Darshanzapda/weather-monitor-app.git
```

- API Key Setup in Docker:

- Open the `docker-compose.yml` file and replace `YOUR_API_KEY` with `your actual API keys`
```
environment:

  REACT_APP_OPENWEATHER_API_KEY=YOUR_API_KEY # Replace with your actual OpenWeatherMap API key

  REACT_APP_RAPIDAPI_KEY=YOUR_API_KEY # Replace with your actual RapidAPI key
```
### Build and run the application:

```
docker-compose up --build
```

- To stop the application: Press `Ctrl + C` and execute:

```
docker-compose down
```

###  Usage

- Once the application is running, navigate to the provided URL (http://localhost:3000) to access the app.
- You can enter a city name to view the current and historical weather conditions.

### Design Choices
- The application is built with a focus on real-time data processing, utilizing various APIs to provide comprehensive weather information.
- The interface is designed for user accessibility and ease of use, displaying relevant weather data and icons based on the conditions.

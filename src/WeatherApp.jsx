import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [defaultWeather, setDefaultWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeatherData = async (city) => {
    try {
      setError(null);
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) throw new Error(data.message);

      const result = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelslike: data.main.feels_like,
        weather: data.weather[0].main,
      };

      if (city.toLowerCase() === "bangalore") {
        setDefaultWeather(result);
        setWeatherInfo(null); // Clear searched info
      } else {
        setWeatherInfo(result);
      }
    } catch (error) {
      setError("The location you searched is not found in our API!");
      setWeatherInfo(null);
    }
  };

  useEffect(() => {
    getWeatherData("Bangalore");
  }, []);

  return (
    <div>
      <div className="logo">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <SearchBox updateInfo={getWeatherData} error={error} />
        {/* Show searched city if available, else default Bangalore */}
        <InfoBox info={weatherInfo || defaultWeather} />
      </div>

      <div className="footer">
        <p>&copy; Skylytics Private Limited 2025</p>
      </div>
    </div>
  );
}

import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
      setWeatherInfo(newInfo);
    }

    return(
        <div>

         <div className="logo">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
      </div>

        <div style={{textAlign: "center"}}>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>

       <div className="footer">
        <p>&copy; Skylytics Private Limited 2025</p>
       </div>

        </div>
    )
}
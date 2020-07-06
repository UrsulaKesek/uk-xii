import React from "react";
import "./SingleWeatherCard.css";

const SingleWeatherCard = ({ city, data }) => (
  <div className="weather-card">
    <h2>
      {data.main.temp ? `TEMP:${(data.main.temp - 273.15).toFixed(0)} ° C` :
       `TEMP:${((data.main.temp - 273.15)*1.8 + 32).toFixed(0)} ° F`}
    </h2>
    <span>
      {data.main.temp_min
        ? ` Min:${(data.main.temp_min - 273.15).toFixed(0)} ° C`
        : ""}
    </span>
    <span>
      {data.main.temp_max
        ? ` Max:${(data.main.temp_max - 273.15).toFixed(0)} ° C`
        : ""}
    </span>

    <h4>{data.main.humidity ? `Humidity:${data.main.humidity}` : ""}</h4>
    <h3>
      {data.rain
        ? `Chances of rain in ${city}:${data.rain["1h"] * 100}%`
        : `Chances of rain in ${city} is 0%`}
    </h3>
    <h2>
      {data.weather[0].icon ? `Icon:${data.weather[0].icon}`:""}
      <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather-icon" />
    </h2>
    <h2>
      {data.weather[0].description
        ? `What's it like out there:${data.weather[0].description}`
        : ""}
    </h2>
  </div>
);
export default SingleWeatherCard;

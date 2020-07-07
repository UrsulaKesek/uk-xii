import React from "react";
import "./SingleWeatherCard.css";

const SingleWeatherCard = ({ city, data, onClick }) => (
  <>
    <div className="weather-card">
      <div className="temp">
        <h1>Temperature</h1>
        <h2>
          {data.main.temp ? `${(data.main.temp - 273.15).toFixed(0)} ° C` : ""}
        </h2>
        <h2>
          {data.main.temp
            ? `${((data.main.temp - 273.15) * 1.8 + 32).toFixed(0)} ° F`
            : ""}
        </h2>
      </div>
      <button className="C" onClick={onClick}>
        C
      </button>
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
      <button className="F" onClick={onClick}>
        F
      </button>

      <h4>{data.main.humidity ? `Humidity:${data.main.humidity}` : ""}</h4>
      <h3>
        {data.rain
          ? `Chances of rain in ${city}:${(data.rain["1h"] * 100).toFixed(0)}%`
          : `Chances of rain in ${city} is 0%`}
      </h3>
      <h2>
        {data.weather[0].icon ? `${data.weather[0].icon}` : ""}

        <img
          className="icons"
          src="http://openweathermap.org/img/wn/04d.png"
          alt="weather-icon"
        />
      </h2>
      <h5>
        {data.weather[0].description
          ? `What's it like out there:${data.weather[0].description}`
          : ""}
      </h5>
    </div>
  </>
);
export default SingleWeatherCard;
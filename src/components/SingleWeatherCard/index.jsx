import React from "react";
import "./SingleWeatherCard.css";
import Toggle from "../Toggle";

const SingleWeatherCard = ({ city, data, onClick }) => (
  <>
    <div className="weather-card">
      <div className="temp">
        <h2>Temperature</h2>
        <h3>
          {data.main.temp ? `${(data.main.temp - 273.15).toFixed(0)} ° C` : ""}
        </h3>
        <h3>
          {data.main.temp
            ? `${((data.main.temp - 273.15) * 1.8 + 32).toFixed(0)} ° F`
            : ""}
        </h3>
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
      <Toggle/>

      <h5>{data.main.humidity ? `Humidity:${data.main.humidity}` : ""}</h5>
      <h4>
        {data.rain
          ? `Chances of rain in ${city}:${(data.rain["1h"] * 100).toFixed(0)}%`
          : `Chances of rain in ${city} is 0%`}
      </h4>
      <div>
        {/* <h2>{data.weather[0].icon ? `${data.weather[0].icon}` : ""}</h2> */}
        <h1>
          <img
            alt="weather-icon"
            className="icons"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          />
        </h1>
        <h5>
          {data.weather[0].description
            ? `What's it like out there:${data.weather[0].description}`
            : ""}
        </h5>
      </div>
    </div>
  </>
);
export default SingleWeatherCard;

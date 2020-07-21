import React from "react";
import "./SingleWeatherCard.css";
const SingleWeatherCard = ({ city, data, unit, onClick, onChange }) => (
  <>
    <div className="weather-card">
      <div className="temp">
        <h3>Temperature</h3>
      <div className="radios">
        <label for="fah">
        Fahrenheit
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={onChange}
          />
          <h4>
            {data.main.temp
              ? `${((data.main.temp - 273.15) * 1.8 + 32).toFixed(0)} ° F`
              : ""}
          </h4>
        </label>
        <button className="toggle">-</button>
        <label for="cel">
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={onChange}
          />
                  Celcius
          <h4>
            {data.main.temp
              ? `${(data.main.temp - 273.15).toFixed(0)} ° C`
              : ""}
          </h4>
        </label>
      </div>
      </div>
      <div className="minmaxhum">
      <h4>
        {data.main.temp_min
          ? ` Min:${(data.main.temp_min - 273.15).toFixed(0)} ° C`
          : ""}
      </h4>
      <h4>
        {data.main.temp_max
          ? ` Max:${(data.main.temp_max - 273.15).toFixed(0)} ° C`
          : ""}
      </h4>
      <h5>{data.main.humidity ? `Humidity:${data.main.humidity}` : ""}</h5>
      </div>

      <h4>
        {data.rain
          ? `Chances of rain in ${city}:${(data.rain["1h"] * 100).toFixed(0)}%`
          : `Chances of rain in ${city} is 0%`}
      </h4>
<<<<<<< HEAD
      <div className="icons">
        <h3>Weather Icon</h3>
=======
      <div>
        {/* <h2>{data.weather[0].icon ? `${data.weather[0].icon}` : ""}</h2> */}
>>>>>>> 37b55071e5b839740f50330a0545e332e278c9ba
        <h1>
          <img
            alt="weather-icon"
            className="icon"
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

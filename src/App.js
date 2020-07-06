import React, { useState } from "react";
import "./App.css";
import { Input, Form, SingleWeatherCard } from "./components";
import { API_KEY } from "./constants";

function App() {
  const initialState = {
    city: "",
  };
  const [query, setQuery] = useState(initialState);
  const [data, setData] = useState({});
  const onChange = (event) => {
    setQuery({ ...query, [event.target.id]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, city: query.city,icon:query.icon,loading: true });
    fetch(
      `${window.location.protocol}//api.openweathermap.org/data/2.5/weather?q=${query.city}&appid=${API_KEY}&units=${query.units}`
    ).then((res) => {
      if (!res.ok) {
        setData({ ...data, error: res.statusText, loading: false });
        return;
      }
      return res.json().then((weatherData) => {
        setData({
          ...data,
          city: query.city,
          weatherData,
          icon: query.icon,
          loading: false,
          error: null,
        });
      });
    });
  };
  return (
    <div className="app">
      <h1>
        <span className="stormy" aria-label="weather-app" role="img">
          ⛈️
        </span>
        Weather App
        <span className="stormy1" aria-label="weather-app" role="img">
          ⛈️
        </span>
      </h1>
      <Form onSubmit={onSubmit}>
        <Input
          id="city"
          label="Choose a City"
          onChange={onChange}
          placeholder="Insert the city name here"
          type="text"
          city={query.city}
        />
        <button disabled={data.loading || !query.city}>
          {data.loading ? "Loading..." : "Search!"}
        </button>
      </Form>
      {data.weatherData && (
        <SingleWeatherCard city={query.city} icon={query.icon} data={data.weatherData} />
      )}
      {data.error && <div>{JSON.stringify(data.error)}</div>}
    </div>
  );
}

export default App;

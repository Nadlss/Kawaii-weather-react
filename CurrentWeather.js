import React from "react";
import sunny from "../src/images/002-sunny.png";
import humidity from "../src/images/humidity.png";
import wind from "../src/images/019-wind-1.png";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div id="img-wind-speed">
      <div className="row">
        <div className="col-6">
          <figure>
            <img src={sunny} id="current-weather-img" alt="Sunny" />
            <figcaption id="current-weather-caption">Sunny</figcaption>
          </figure>
        </div>
        <div className="col-6" id="humidity-wind-info">
          <div id="current-temp-value">
            <span id="temp-value">24 </span>
            <a href="http://www.google.pt" id="celsius-link">
              ºC{" "}
            </a>{" "}
            |
            <a href="https://www.google.pt" id="fahrenheit-link">
              {" "}
              ºF
            </a>
          </div>
          <div id="max-min-temp">
            <span id="max-current-temp">
              Máx. <strong id="max-current-temp-value">25º</strong>
            </span>
            <span id="separator-bar"> | </span>
            <span id="min-current-temp">
              <strong id="min-current-temp-value">18º</strong> Mín.
            </span>
          </div>
          <img src={humidity} id="humidity-img" alt="Humidity Icon" />
          Humidity: <strong>53%</strong>
          <div>
            <img src={wind} id="wind-img" alt="Wind Icon" />
            Wind speed: <strong>5 Km/h</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

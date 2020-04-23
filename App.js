import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CityForm from "./CityForm";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <CityForm />
      <div id="location">
        <span id="city">San Juan</span>, <span id="country">Puerto Rico</span>
      </div>
      <CurrentWeather />
      <div> imagem 3</div>
    </div>
  );
}

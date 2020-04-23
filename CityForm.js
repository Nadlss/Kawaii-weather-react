import React from "react";
import "./CityForm.css";

export default function CityForm() {
  return (
    <div container id="container">
      <div className="CityForm">
        <form id="city-seacrh">
          <div className="Row">
            <span>
              <input
                type="text"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                id="search-city-input"
              />
            </span>
            <span>
              <input
                type="submit"
                value="Search"
                className=" btn btn-success"
                id="search-button"
              />
            </span>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                id="current-location-button"
              >
                Current location
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

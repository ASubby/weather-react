import React from "react";
import "./styles.css";
import City from "./City";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Wind from "./Wind";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Type a city..."
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                    w-100
                  />
                </div>
              </div>
            </form>
            <City />
            <div className="row">
              <div className="col-6">
                <Temperature />
              </div>
              <div className="col-6">
                <Humidity value="46" />
                <Wind value="4" />
              </div>
            </div>
          </div>
          <small>
            <a href="https://github.com/ASubby/weather-react">
              Open-source code by Adesubomi
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

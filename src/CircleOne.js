import React from "react";
import "./CircleOne.css";

export default function CircleOne() {
  return (
    <div className="first-circle">
      <div className="date">Monday</div>
      <div className="weather-pic-combo">
        <img src="" alt="" id="weather-icon" />
        <span className="weather">Sunny</span>
      </div>
      <div className="avg-temp">
        <span id="number">93°F</span>
        <span id="temperature"></span>
      </div>
      <div className="temp-range">
        <span id="low">85</span>
        <span id="hyphen"> - </span>
        <span id="high">98°F</span>
      </div>
      <div className="wind-speed">windspeed: 0 mph</div>
      <div className="humidity">humidity: 10%</div>
    </div>
  );
}

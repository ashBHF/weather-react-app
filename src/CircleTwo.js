import React from "react";
import "./CircleTwo.css";

export default function CircleTwo() {
  return (
    <div class="second-circle">
      <div class="day">Tues</div>
      <div class="weather-pic-combo2">
        <img src="" id="weather-icon2" />
        <span class="weather2">Cloudy</span>
      </div>
      <div class="avg-temp2">89°F</div>
      <div class="temp-range2">
        <span id="second-circle-min">76° - </span>{" "}
        <span id="second-circle-max">89°</span>
      </div>
    </div>
  );
}

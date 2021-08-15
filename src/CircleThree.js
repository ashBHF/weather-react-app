import React from "react";
import "./CircleThree.css";

export default function CircleThree() {
  return (
    <div class="third-circle">
      <div class="day3">Wed</div>
      <div class="weather-pic-combo3">
        <img src="" id="weather-icon3" />
        <span class="weather3">Snowy</span>
      </div>
      <div class="avg-temp3">43°F</div>
      <div class="temp-range3">
        35° - <span id="third-circle-min"></span>{" "}
        <span id="third-circle-max">100°</span>
      </div>
    </div>
  );
}

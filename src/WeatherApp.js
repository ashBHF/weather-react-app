import "./index.css";
import React from "react";
import Form from "./Form";
import CircleOne from "./CircleOne";
import CircleTwo from "./CircleTwo";
import CircleThree from "./CircleThree";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Form />
      <CircleOne />
      <CircleTwo />
      <CircleThree />
      <Footer />
    </div>
  );
}

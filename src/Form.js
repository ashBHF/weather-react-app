import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="container background">
      <div className="row search-bar">
        <div className="col-9">
          <form id="city-search" class="mb-3">
            <input
              type="text"
              placeholder="Enter City"
              class="form-control"
              id="city-input"
              autocomplete="off"
              autofocus="on"
            />
          </form>
        </div>
        <div className="col-3">
          <input type="submit" value="search" class="btn btn-primary w-200" />
        </div>
      </div>

      <div class="city">Fort Collins</div>
      <div class="time">8:07 pm</div>
      <div id="bat-pic">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/012/792/original/batAwakeBranch.png?1626109239"
          width="212px"
        />
      </div>
    </div>
  );
}

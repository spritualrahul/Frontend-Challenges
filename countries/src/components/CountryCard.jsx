import React from "react";

export default function CountryCard() {
  return (
    <div>
      <a class="country-card" href="/country.html?name=South Georgia">
        <img src="https://flagcdn.com/gs.svg" alt="South Georgia flag" />
        <div class="card-text">
          <h3 class="card-title">South Georgia</h3>
          <p>
            <b>Population: </b>30
          </p>
          <p>
            <b>Region: </b>Antarctic
          </p>
          <p>
            <b>Capital: </b>King Edward Point
          </p>
        </div>
      </a>
    </div>
  );
}

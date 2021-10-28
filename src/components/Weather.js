import { useState } from "react";
import axios from "axios";
import "./weather.css";

const API_KEY = "a72ecc03df2513602ded401643d0732d";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

function Weather() {
  const [values, setValues] = useState("");
  const [data, setData] = useState([]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      axios(`${baseUrl}?q=${values}&appid=${API_KEY}`).then((res) =>
        setData(res.data)
      );
    }
  };
  console.log(data);

  return (
    <div className="container">
      <div>
        <input
          type="text"
          onChange={(e) => setValues(e.target.value)}
          placeholder="enter a city"
          value={values}
          onKeyPress={search}
        />
      </div>
      <div>
        <div>
          {data.name}
        </div>
        <div>
          {Math.round(data.main.temp)} derece
        </div>
        <div>
          {data.weather[0].main}
        </div>
      </div>
    </div>
  );
}

export default Weather;

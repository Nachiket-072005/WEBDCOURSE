import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "23203a7d4435fed42ec545edacb6fd3e";

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      let weatherInfo = {
        city: data.name,
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        Feels_Like: data.main.feels_like,
        description: data.weather[0].description,
      };
      console.log(weatherInfo);
      return weatherInfo;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="SearchBox">
      <h3>Search for the weather!</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p className="error" style={{ color: "red" }}>
            There was an error fetching the weather data
          </p>
        )}
      </form>
    </div>
  );
}

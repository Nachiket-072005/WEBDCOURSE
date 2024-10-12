import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "London",
    temperature: 15,
    temp_min: 13,
    temp_max: 17,
    humidity: 50,
    feels_like: 14,
    description: "Cloudy",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox Info={weatherInfo} />
    </div>
  );
}

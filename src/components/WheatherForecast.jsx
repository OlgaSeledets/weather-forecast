import React, { useState } from "react";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "39c13462afcea0dacb3084d61bb29812";

const getWeather = async (city, setWeather) => {
  const response = await fetch(
    `${URL}?q=${city}&appid=${API_KEY}&exclude=minutely,hourly,daily,alerts&units=metric`
  );
  const data = await response.json();
  setWeather(data);
  console.log(data);
};

const WheatherForecast = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState({});
  return (
    <div>
      <div>
        <input
          onChange={e => setCity(e.target.value)}
          type="text"
          placeholder="Enter City"
        ></input>
        <button onClick={() => getWeather(city, setWeather)}>Get Weather Forecast</button>
        Temperature: {weather?.main?.temp}
      </div>
    </div>
  );
};

export default WheatherForecast;

// {
//   "coord": {
//       "lon": 27.5667,
//       "lat": 53.9
//   },
//   "weather": [
//       {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 17.86,
//       "feels_like": 17.97,
//       "temp_min": 17.86,
//       "temp_max": 17.86,
//       "pressure": 1020,
//       "humidity": 87,
//       "sea_level": 1020,
//       "grnd_level": 994
//   },
//   "visibility": 10000,
//   "wind": {
//       "speed": 3.32,
//       "deg": 264,
//       "gust": 7.56
//   },
//   "clouds": {
//       "all": 96
//   },
//   "dt": 1658167812,
//   "sys": {
//       "type": 1,
//       "id": 8939,
//       "country": "BY",
//       "sunrise": 1658109669,
//       "sunset": 1658169019
//   },
//   "timezone": 10800,
//   "id": 625144,
//   "name": "Minsk",
//   "cod": 200
// }

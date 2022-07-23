import React, { useState } from 'react';

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

const SearchWeather = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState({});
    return (
        <div>
            <h1 className='title'>Weather Forecast</h1>
            <input onChange={e => setCity(e.target.value)} className='search' type="text" placeholder='Search...'></input>
            <button onClick={() => getWeather(city, setWeather)} className='btn btn-today'>TODAY</button>
            <button className='btn btn-tomorrow'>TOMORROW</button>
            <button className='btn btn-week'>WEEK</button>
            {/* Temperature: {weather?.main?.temp} */}
        </div>
    );
}

export default SearchWeather;

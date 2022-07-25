import React, { useState } from 'react';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "39c13462afcea0dacb3084d61bb29812";

const ButtonToday = ({city}) => {
    const [weather, setWeather] = useState({});
    const City = {city};

    const getWeather = async () => {
        const response = await fetch(
          `${URL}?q=${City.city}&appid=${API_KEY}&exclude=minutely,hourly,daily,alerts&units=metric`
        );
        const data = await response.json();
        setWeather(data);
        console.log(data);
      };

    return (
        <div>
            <button onClick={() => getWeather()} className='btn'>TODAY</button>
        </div>
    );
}

export default ButtonToday;

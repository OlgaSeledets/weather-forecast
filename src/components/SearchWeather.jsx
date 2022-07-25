import React, { useState } from 'react';
import Button from './Button';
import Card from "./Card";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "39c13462afcea0dacb3084d61bb29812";

const SearchWeather = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    const getWeather = (city) => {
        return async () => { 
            const response = await fetch(
            `${URL}?q=${city}&appid=${API_KEY}&exclude=minutely,hourly,daily,alerts&units=metric`
            );
            const data = await response.json();
            
            setWeather(data);
            console.log(data);
        }
    };

    return (
        <div>
            <h1 className='title'>Weather Forecast</h1>
            <input onChange={e => setCity(e.target.value)} className='search' type="text" placeholder='Search...'></input>
            <Button title='TODAY' style='btn' action={getWeather(city)} />
            <Button title='TOMORROW' style='btn' />
            <Button title='WEEK' style='btn btn-week' />
            <Card weather={weather}/>
        </div>
    );
}

export default SearchWeather;

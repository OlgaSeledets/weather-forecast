import React, { useState } from 'react';
import Button from './Button';
import Card from "./Card";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "39c13462afcea0dacb3084d61bb29812";

const SearchWeather = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const [isVisibility, setIsVisibility] = useState(false);

    const handleClick = () => {
        setIsVisibility(true)
    }
    const getWeather = (city) => {
        return async () => { 
            const response = await fetch(
            `${URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
            
            setWeather(data);
            console.log(data);
            handleClick()
            console.log(`https://api.openweathermap.org/data/2.5/forecast?appid=39c13462afcea0dacb3084d61bb29812&q=London&units=metric&cnt=16`)
        }
    };

    return (
        <div>
            <h1 className='title'>Weather Forecast</h1>
            <input onChange={e => setCity(e.target.value)} className='search' type="text" placeholder='Search...'></input>
            <Button name='today' title='TODAY' style='btn' action={getWeather(city)} />
            <Button name='tomorrow' title='TOMORROW' style='btn' action={getWeather('London')} />
            <Button title='WEEK' style='btn btn-week' />
            {
                (isVisibility === true) && <Card weather={weather} />
            }
        </div>
    );
}

export default SearchWeather;

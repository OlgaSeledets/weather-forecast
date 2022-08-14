import React, { useState } from 'react';
import Button from './Button';
import Card from "./Card";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "39c13462afcea0dacb3084d61bb29812";

const SearchWeather = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const [weatherHours, setWeatherHours] = useState();
    const [isVisibilityNow, setIsVisibilityNow] = useState(false);
    const [isVisibilityToday, setIsVisibilityToday] = useState(false);
    const [index, setIndex] = useState(1)
    const [timeLabel, setTimeLabel] = useState(3)

    const handleClickNow = () => {
        setIsVisibilityNow(true)
        setIsVisibilityToday(false)
    }
    const handleClickToday = () => {
        setIsVisibilityToday(true)
        setIsVisibilityNow(false)
    }
    const getWeather = (city) => {
        return async () => { 
            const response = await fetch(
            `${URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
            
            setWeather(data);
            console.log(data);
            handleClickNow()
            console.log(`https://api.openweathermap.org/data/2.5/forecast?appid=39c13462afcea0dacb3084d61bb29812&q=${city}&units=metric&cnt=3`)
        }
    };
    const getWeatherHours = (city) => {
        return async () => { 
            const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=5`
            );
            const data = await response.json();
            
            setWeatherHours(data);
            console.log(data);
            handleClickToday()
        }
    }

    return (
        <div>
            <h1 className='title'>Weather Forecast</h1>
            <input onChange={e => setCity(e.target.value)} className='search' type="text" placeholder='Search...'></input>
            <Button name='now' title='NOW' style='btn' action={getWeather(city)} />
            <Button name='today' title='TODAY' style='btn btn-today' action={getWeatherHours(city)} />
            <div className='wrapper-cards'>
                {
                    (isVisibilityNow === true) ? <Card weather={weather} visibilityNow={isVisibilityNow} /> 
                    : (isVisibilityToday === true) && <Card weatherHours={weatherHours} index={index} timeLabel={timeLabel} visibilityToday={isVisibilityToday} /> 
                }
                {
                    (isVisibilityToday === true) && <Card weatherHours={weatherHours} index={index + 1} timeLabel={timeLabel + 3} visibilityToday={isVisibilityToday} /> 
                }
                {
                    (isVisibilityToday === true) && <Card weatherHours={weatherHours} index={index + 2} timeLabel={timeLabel + 6} visibilityToday={isVisibilityToday} /> 
                }
                 {
                    (isVisibilityToday === true) && <Card weatherHours={weatherHours} index={index + 3} timeLabel={timeLabel + 9} visibilityToday={isVisibilityToday} /> 
                }
            </div>
        </div>
    );
}

export default SearchWeather;

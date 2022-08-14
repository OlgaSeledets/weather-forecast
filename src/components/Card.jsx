import React from 'react';

const Card = ({weather, weatherHours, index, timeLabel, visibilityNow, visibilityToday}) => {
    return (
        <div className='card'>
           {
                (visibilityToday === true) ? <h2 className='time-label'>after {timeLabel} hours</h2>
                : ''
           }
           <div className='temperature'>
                {
                    (visibilityNow === true) ? (weather?.main?.temp) && (Math.round(weather.main.temp))
                    : (visibilityToday === true) ? (weatherHours?.list[index]?.main?.temp) && (Math.round(weatherHours.list[index].main.temp)) : ''
                }
                <span className='Celsius'>°C</span> 
           </div>
           <img className='iconWeather' src={
                (visibilityNow === true) ? (weather?.weather[0]?.icon) && `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
                : (visibilityToday === true) ? weatherHours?.list[index]?.weather[0]?.icon && `http://openweathermap.org/img/w/${weatherHours.list[index].weather[0].icon}.png` : ''
            }/>
           <div className='description'>
                {
                    (visibilityNow === true) ? (weather?.weather[0]?.description) && (weather.weather[0].description)
                    : (visibilityToday === true) ? (weatherHours?.list[index]?.weather[0]?.description) && (weatherHours.list[index].weather[0].description) : ''
                }
           </div>
        </div>
    );
}

export default Card;

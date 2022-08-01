import React from 'react';

const Card = ({weather}) => {
    return (
        <div className='card'>
           <div className='temperature'>
                {weather?.main?.temp ? Math.round(weather.main.temp) : ''}<span className='Celsius'>°C</span>
           </div>
           <img className='iconWeather' src={weather?.weather[0]?.icon ? `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` : ''}/>
           <div className='description'>
                {weather?.weather[0]?.description ? weather.weather[0].description : ''}
                <br/>
                {weather?.dt ? weather.dt : ''}
                <br/>
                {weather?.dt ? Number(weather.dt) + 24 * 3600 : ''}
           </div>
        </div>
    );
}

export default Card;

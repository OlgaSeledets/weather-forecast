import React from 'react';

const Card = ({weather, visibility}) => {
    return (
        <div className='card' style={{display: visibility}}>
           <div className='temperature'>
                {weather?.main?.temp ? Math.ceil(weather.main.temp) : ''}<span className='Celsius'>°C</span>
           </div>
           <img className='iconWeather' src={weather?.weather[0]?.icon ? `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` : ''}/>
           <div className='description'>
                {weather?.weather[0]?.description ? weather.weather[0].description : ''}
           </div>
        </div>
    );
}

export default Card;

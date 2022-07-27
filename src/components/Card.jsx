import React from 'react';

const Card = ({weather}) => {
    return (
        <div className='card'>
           <div className='temperature'>
                {weather?.main?.temp ? Math.ceil(weather.main.temp) : ''}<span className='Celsius'>°C</span>
           </div>
           <img className='iconWeather' src={weather?.weather[0]?.icon ? `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` : ''}/>
        </div>
    );
}

export default Card;

import React, { useState } from 'react';
import ButtonToday from './ButtonToday';

const SearchWeather = () => {
    const [city, setCity] = useState();

    return (
        <div>
            <h1 className='title'>Weather Forecast</h1>
            <input onChange={e => setCity(e.target.value)} className='search' type="text" placeholder='Search...'></input>
            <ButtonToday city={city}/>
            <button className='btn'>TOMORROW</button>
            <button className='btn btn-week'>WEEK</button>
            {/* Temperature: {weather?.main?.temp} */}
        </div>
    );
}

export default SearchWeather;

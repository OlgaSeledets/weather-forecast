import React from 'react';

const SearchWeather = () => {
    return (
        <div>
            <h1 className='title'>Weather Forecast</h1>
            <input className='search' type="text" placeholder='Search...'></input>
            <button className='btn btn-today'>TODAY</button>
            <button className='btn btn-tomorrow'>TOMORROW</button>
            <button className='btn btn-week'>WEEK</button>
        </div>
    );
}

export default SearchWeather;

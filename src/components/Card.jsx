import React from 'react';

const Card = ({weather}) => {
    return (
        <div className='card'>
           {JSON.stringify(weather)}
        </div>
    );
}

export default Card;

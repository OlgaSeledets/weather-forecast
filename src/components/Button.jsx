import React from 'react';

const Button = ({ title, style, action }) => {
    return (
        <button onClick={() => action()} className={style}>{title}</button>
    );
}

export default Button;

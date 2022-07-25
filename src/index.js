import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);

document.body.style = 'background: #1E1E1E;';

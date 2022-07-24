import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//root element in DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

//Render react app inside the root
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@splidejs/splide/dist/js/splide.min';
import '@splidejs/splide/dist/css/splide.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <i className="fa-brands fa-facebook-f" />
    </React.StrictMode>
);

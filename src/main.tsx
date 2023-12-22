// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// app
import App from './App.tsx';
// styles
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

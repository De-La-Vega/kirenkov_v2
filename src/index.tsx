import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './index.scss';
import 'photoswipe/dist/photoswipe.css'
import { Main } from './Main';
import reportWebVitals from './reportWebVitals';
import './i18n';

import { ThemeProvider } from './components/ThemeSwitcher/ThemeContext'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

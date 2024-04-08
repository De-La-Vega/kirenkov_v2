import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './index.scss';
import { Main } from './Main';
import reportWebVitals from './reportWebVitals';
import './i18n';

import { ThemeProvider } from './components/ThemeSwitcher/ThemeContext'
import { LightboxProvider } from './components/LightboxContainer/LightboxContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <LightboxProvider>
                <Main />
            </LightboxProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
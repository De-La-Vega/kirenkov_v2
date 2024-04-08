import React, { useState, useContext, createContext, useEffect } from 'react';

import { COLOR_THEME, LOCAL_STORAGE_KEY } from '../../enums';

type TThemeContext = {
    theme: COLOR_THEME;
    toggleTheme: () => void;
}

type TProps = {
    children: React.ReactNode;
}

const ThemeContext = createContext<TThemeContext | undefined>(undefined);

const getInitialTheme = (): COLOR_THEME => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY.APP_THEME);

    if (storedTheme === COLOR_THEME.LIGHT || storedTheme === COLOR_THEME.DARK) {
        return storedTheme;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return COLOR_THEME.DARK;
    }

    return COLOR_THEME.LIGHT;
};

export const ThemeProvider: React.FC<TProps> = ({ children }) => {
    const [theme, setTheme] = useState<COLOR_THEME>(getInitialTheme());

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(LOCAL_STORAGE_KEY.APP_THEME, theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === COLOR_THEME.LIGHT ? COLOR_THEME.DARK : COLOR_THEME.LIGHT;
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
